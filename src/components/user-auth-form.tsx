import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { supabaseSDK } from "@/lib/supabase"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  type userDataType = {
    email: string
    first_name: string
    password: string
  }
  const [userData, setUserData] = React.useState<userDataType>({
    email: '',
    first_name: '',
    password: '',
  })
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    const { data, error } = await supabaseSDK.auth.signUp(
      {
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            first_name: userData.first_name,
          },
          // emailRedirectTo: 'https://example.com/welcome'
        }
      }
    )

    if (error) {
      setIsLoading(false)
      return
    } else {
      console.log(data)
    }
    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Name"
              type="name"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              value={userData.first_name}
              onChange={(e) => setUserData({ ...userData, first_name: e.target.value })}
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              value={userData.password}
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  )
}