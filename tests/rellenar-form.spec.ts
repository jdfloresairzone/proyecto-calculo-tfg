import { test, expect } from "@playwright/test";

test("Flujo completo de creación de presupuesto", async ({ page }) => {

    await page.goto('/');
    await page.fill('input[type="email"]', 'higofib731@losvtn.com');
    await page.fill('input[type="password"]', 'secret');


    // Paso 1: Entrar en la herramienta
    await page.goto("/herramienta-de-presupuestos/");
    await expect(page).toHaveURL(/herramienta-de-presupuestos/);
    await expect(page.locator("h1")).toContainText(/Herramienta de presupuestos/i);


    // Paso 2: Datos Generales
    await expect(
        page.locator('div[data-slot="card-title"]', { hasText: "Datos generales" })
    ).toBeVisible();
    await page.getByPlaceholder("Introduce la referencia").fill("testjuan");
    await page.getByRole("button", { name: "PROCEDER" }).first().click();


    // Paso 3: Configuración del Sistema
    await expect(
        page.locator('div[data-slot="card-title"]', { hasText: "Configuración del sistema" })
    ).toBeVisible();

    await page.evaluate(() => {
        const systemAirInput = document.querySelector('input[data-slot="input"]') as HTMLInputElement;
        const diffusionAirInput = document.querySelectorAll('input[data-slot="input"]')[1] as HTMLInputElement;

        if (systemAirInput) {
            systemAirInput.value = "4.2";
            systemAirInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
        if (diffusionAirInput) {
            diffusionAirInput.value = "3.0";
            diffusionAirInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });

    await page.getByRole("button", { name: "PROCEDER" }).nth(1).click();


    // Paso 4: Sistema de Configuración
    await expect(
        page.locator('div[data-slot="card-title"]', { hasText: "Sistema de Configuración" })
    ).toBeVisible();

    const systemNameInput = page.locator('input').first();
    await systemNameInput.fill("Sistema 1");
    await expect(systemNameInput).toHaveValue("Sistema 1");

    // Rellenar las dos zonas
    const zones = page.locator('div.border-l-blue-500');
    const zoneData = [
        { name: 'Zona 1', height: '2.5', area: '20', thermostat: 'Blueface', color: 'Blanco', connection: 'Cable' },
        { name: 'Zona 2', height: '3.0', area: '25', thermostat: 'Think', color: 'Negro', connection: 'Radio' },
    ];

    for (let i = 0; i < 2; i++) {
        const zoneCard = zones.nth(i);
        await zoneCard.locator('input[data-slot="input"]').nth(0).fill(zoneData[i].name);   // Nombre
        await zoneCard.locator('input[data-slot="input"]').nth(1).fill(zoneData[i].height); // Altura
        await zoneCard.locator('input[data-slot="input"]').nth(2).fill(zoneData[i].area);   // Superficie

        const thermostatDropdown = zoneCard.locator('button[role="combobox"]').nth(0);
        await thermostatDropdown.click();

        await page.locator('div[role="option"]', { hasText: zoneData[i].thermostat }).click();

        const colorDropdown = zoneCard.locator('button[role="combobox"]').nth(1);
        await colorDropdown.click();
        await page.locator('div[role="option"]', { hasText: zoneData[i].color }).click();

        const connectionDropdown = zoneCard.locator('button[role="combobox"]').nth(2);
        await connectionDropdown.click();
        await page.locator('div[role="option"]', { hasText: zoneData[i].connection }).click();

    }

    await page.getByRole("button", { name: "PROCEDER" }).nth(2).click();


    // Paso 5: Selección unidad interior
    await expect(
        page.locator('div[data-slot="card-title"]', { hasText: "Selección unidad interior" })
    ).toBeVisible();

    // FALTA LA MARCA!!!!

    const potencia = page.locator('input[data-slot="input"]').nth(2);
    await potencia.fill("30");

    await page.getByRole("button", { name: "PROCEDER" }).nth(3).click();


    // Paso 6: Selección plenum motorizado
    const plenumCard = page.locator('div[data-slot="card-title"]', { hasText: 'Selección plenum motorizado' });
    await expect(plenumCard).toBeVisible();


  // ===== Tipo de plenum =====
  const tipoPlenumBtn = plenumCard.locator('button[data-slot="select-trigger"]').first();
await tipoPlenumBtn.click({ force: true });        // fuerza el click aunque esté deshabilitado
  await page.getByRole('option', { name: 'Plenum Medium' }).click();

  // ===== Número de compuertas =====
  const dampersBtn = plenumCard.locator('button[data-slot="select-trigger"]').nth(1);
await dampersBtn.click({ force: true });
  await page.getByRole('option', { name: '4' }).click();

  // ===== Comprobaciones =====
  await expect(tipoPlenumBtn.locator('span[data-slot="select-value"]')).toHaveText('Plenum Medium');
  await expect(dampersBtn.locator('span[data-slot="select-value"]')).toHaveText('4');


});
