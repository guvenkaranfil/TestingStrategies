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
});
