import { test, expect } from '@playwright/test';

test('Flujo desde Mi Área hasta Herramienta de Presupuestos', async ({ page }) => {
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

    // 6 Pulsar en "Ir a presupuestos"
    await page.click('a:has-text("Ir a presupuestos")');

    // 7 Pulsar en "Nuevo presupuesto"
    await page.click('a:has-text("Nuevo presupuesto")');

    // 8 Comprobar que estamos en la herramienta de presupuestos
    await expect(page).toHaveURL(/herramienta-de-presupuestos/);
    await expect(page.locator('h1')).toContainText(/Herramienta de presupuestos/i);
});
