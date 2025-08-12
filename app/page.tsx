"use client"

import MyArea from "@/components/MyArea"
import { useState, useEffect } from "react"
import LoginForm from "@/components/login-form"

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginError, setLoginError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Verifica si hay token guardado al cargar
  useEffect(() => {
    const token = localStorage.getItem("access_token")
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true)
    setLoginError("")

    try {
      const response = await fetch(
        "https://devapi.airzonecloud.com/msdashboard.pv1/auth/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            apikey: "kBAWXtE8GEVAUtBRk0LoXRKZ6wYh5TkW",
            "app-locale": "es",
          },
          body: JSON.stringify({ email, password }),
        }
      )

      if (!response.ok) {
        throw new Error("Credenciales inválidas")
      }

      const data = await response.json()

      if (data.access_token) {
        // Guarda el token en localStorage
        localStorage.setItem("access_token", data.access_token)
        setIsAuthenticated(true)
      } else {
        throw new Error("No se recibió el token de acceso")
      }
    } catch (error) {
      setLoginError("Error al iniciar sesión. Verifica tus credenciales.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <LoginForm
        onLogin={handleLogin}
        error={loginError}
        isLoading={isLoading}
      />
    )
  }

  return (
    <section className="p-4">
      <MyArea />
    </section>
  )
}
