import { auth, signIn } from "@/auth"
import Button from "./button"
 
export default function Form() {

  
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn('credentials', { email: formData.get('email'), password: formData.get('password'), redirectTo:'/' })
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign In</button>
      <p>No account?</p>
      <Button />
    </form>
  )
}