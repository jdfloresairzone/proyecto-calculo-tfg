"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ChevronDown } from "lucide-react"

interface LoginFormProps {
  onLogin: (email: string, password: string) => void
  error?: string
  isLoading?: boolean
}

export default function LoginForm({ onLogin, error, isLoading }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin(email, password)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side with gradient background and image */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/airzone/image/upload/v1707307927/images/aidoo-v2/wifi/login.jpg"
            alt="Airzone"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Overlay to ensure logo visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/80 via-teal-400/80 to-cyan-400/80"></div>

        {/* Logo and text */}
        <div className="relative z-10 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-2">
              <span className="text-2xl text-teal-500">A</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-light tracking-wider">IRZONE</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-xl text-white">A</span>
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-light tracking-wider text-gray-800">IRZONE</h1>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Iniciar sesión</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="h-12 border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Contraseña
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Iniciar sesión"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className="h-12 border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[#007297] hover:bg-[#005a73] text-white font-medium rounded-md"
                disabled={isLoading}
              >
                {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
              </Button>
            </form>

            {/* Footer links */}
            <div className="mt-6 flex items-center justify-between text-sm">
              <div className="flex items-center space-x-1 text-gray-600">
                <span>Español</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <a href="" className="text-gray-600 hover:text-gray-800">
                ¿Has olvidado la contraseña?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
