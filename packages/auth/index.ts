import { prisma } from '@aiabit/db'
import Credentials from '@auth/core/providers/credentials'
import type { DefaultSession } from '@auth/core/types'
import { PrismaAdapter } from '@auth/prisma-adapter'
import bcrypt from 'bcrypt'

import NextAuth from 'next-auth'

// import { env } from './env.mjs'

export type { Session } from 'next-auth'

// Update this whenever adding new providers so that the client can
export const providers = ['discord'] as const
export type OAuthProviders = (typeof providers)[number]

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
    } & DefaultSession['user']
  }
}

const emailEnabled = false

export const {
  handlers: { GET, POST },
  auth,
  CSRF_experimental,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('credentials', credentials)
        if (!credentials) return null
        console.log('credentials', credentials)
        const { username, password } = credentials as {
          username: string
          password: string
        }
        console.log('password', bcrypt.hashSync(password, 10))

        const findUser = await prisma.user.findFirst({
          where: emailEnabled
            ? {
              OR: [
                {
                  username: username.toLowerCase(),
                },
                {
                  email: username?.toLowerCase(),
                },
              ],
              emailVerified: { not: null },
            }
            : {
              username: username.toLowerCase(),
            },
        })

        let passwordMatches = false

        if (findUser?.password) {
          passwordMatches = bcrypt.compareSync(password, findUser.password as string)
        }

        if (passwordMatches) {
          return findUser
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),

    // @TODO - if you wanna have auth on the edge
    // jwt: ({ token, profile }) => {
    //   if (profile?.id) {
    //     token.id = profile.id;
    //     token.image = profile.picture;
    //   }
    //   return token;
    // },

    // @TODO
    // authorized({ request, auth }) {
    //   return !!auth?.user
    // }
  },
})
