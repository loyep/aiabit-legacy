import type { OAuthProviders } from '@aiabit/auth'
import { CSRF_experimental } from '@aiabit/auth'
import type { ComponentProps } from 'react'

export function SignIn({ provider, ...props }: { provider: OAuthProviders } & ComponentProps<'button'>) {
  return (
    <form action={`/api/auth/signin/${provider}`} method="post">
      <button {...props} />
      <CSRF_experimental />
    </form>
  )
}

export function SignOut(props: ComponentProps<'button'>) {
  return (
    <form action="/api/auth/signout" method="post">
      <button {...props} />
      <CSRF_experimental />
    </form>
  )
}
