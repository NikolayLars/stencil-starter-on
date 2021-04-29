import { newE2EPage } from '@stencil/core/testing';

describe('flip-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<flip-card></flip-card>');

    const element = await page.find('flip-card');
    expect(element).toHaveClass('hydrated');
  });
});
