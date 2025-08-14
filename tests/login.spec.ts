
import { test, expect } from '@playwright/test';

test('Inicio de sesión y visualización de mi área', async ({ page }) => {
  // 1️ Ir a la página de login
  await page.goto('/');

  // 2️ Rellenar el formulario con credenciales de prueba
  await page.fill('input[type="email"]', 'higofib731@losvtn.com');
  await page.fill('input[type="password"]', 'secret');

  // 3️ Hacer clic en iniciar sesión
  await page.click('button[type="submit"]');

  // 4️ Esperar a que se cargue la página de mi área
  await page.waitForSelector('text=Mi área');

  // 5️ Comprobar que el área de usuario está visible
  await expect(page.locator('text=Mi área')).toBeVisible();

});
