import AuthHeader from '../auth-header'
import AuthImage from '../auth-image'
import { SignInForm } from './components/signin-form'

export default function SignIn() {
  return (
    <main className="bg-white dark:bg-slate-900">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">
            <AuthHeader />
            <SignInForm />
          </div>
        </div>

        <AuthImage />
      </div>
    </main>
  )
}
