import {by, device, expect, element} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome message', async () => {
    await expect(element(by.text('Welcome!'))).toBeVisible();
  });

  it('should log into account and see welcome message', async () => {
    const emailInput = await element(by.id('email-input'));
    const passwordInput = await element(by.id('password-input'));
    const signInButton = await element(by.text('Giriş Yap'));

    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(signInButton).toBeVisible();

    await emailInput.tap();
    await emailInput.typeText('email@email.com');

    await passwordInput.tap();
    await passwordInput.typeText('123456');

    await signInButton.tap();

    expect(element(by.text('Hoşgeldin!'))).toBeVisible();
  });
});
