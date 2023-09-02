// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_IMG_ENDPONT = 'https://cataas.com'

test('app shows fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  // Expect a fact.
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_IMG_ENDPONT)).toBeTruthy()
})
