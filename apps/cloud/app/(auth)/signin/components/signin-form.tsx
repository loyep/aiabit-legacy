'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

import Link from 'next/link'

interface FormData {
  username: string
  password: string
}

export function SignInForm() {
  const [submitLoader, setSubmitLoader] = useState(false)

  const [form, setForm] = useState<FormData>({
    username: '',
    password: '',
  })

  async function loginUser() {
    if (form.username !== '' && form.password !== '') {
      setSubmitLoader(true)
      // const load = toast.loading('Authenticating...')
      const res = await signIn('credentials', {
        username: form.username,
        password: form.password,
        redirect: false,
      })
      console.log('xxxx')

      // toast.dismiss(load);

      setSubmitLoader(false)

      if (!res?.ok) {
        // toast.error("Invalid login.");
      }
    } else {
      debugger
      // toast.error("Please fill out all the fields.");
    }
  }

  return (
    <div className="max-w-sm mx-auto w-full px-4 py-8">
      <h1 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">Welcome back! ✨</h1>
      {/* Form */}
      <form>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              className="form-input w-full"
              type="text"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="form-input w-full"
              type="password"
              autoComplete="on"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="mr-1">
            <Link className="text-sm underline hover:no-underline" href="/reset-password">
              Forgot Password?
            </Link>
          </div>
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3" onClick={loginUser}>
            Sign In
          </button>
        </div>
      </form>
      {/* Footer */}
      <div className="pt-5 mt-6 border-t border-slate-200 dark:border-slate-700">
        <div className="text-sm">
          Don't you have an account?{' '}
          <Link className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="/signup">
            Sign Up
          </Link>
        </div>
        {/* Warning */}
        <div className="mt-5">
          <div className="bg-amber-100 dark:bg-amber-400/30 text-amber-600 dark:text-amber-400 px-3 py-2 rounded">
            <svg className="inline w-3 h-3 shrink-0 fill-current mr-2" viewBox="0 0 12 12">
              <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
            </svg>
            <span className="text-sm">
              To support you during the pandemic super pro features are free until March 31st.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}