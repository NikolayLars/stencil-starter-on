import { newSpecPage } from '@stencil/core/testing';
import { FlipCard } from '../flip-card';

describe('flip-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FlipCard],
      html: `<flip-card></flip-card>`,
    });
    expect(page.root).toEqualHtml(`
      <flip-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </flip-card>
    `);
  });
});
