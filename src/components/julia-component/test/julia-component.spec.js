import { newSpecPage } from '@stencil/core/testing';
import { JuliaComponent } from '../julia-component';
describe('julia-component', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [JuliaComponent],
            html: `<julia-component></julia-component>`,
        });
        expect(page.root).toEqualHtml(`
      <julia-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </julia-component>
    `);
    });
});
