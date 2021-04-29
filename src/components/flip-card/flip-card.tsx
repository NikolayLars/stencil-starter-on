import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'flip-card',
  styleUrl: 'flip-card.css',
  shadow: true,
})
export class FlipCard {
  render() {
    return (
      <Host>
        <ul>
          <li>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>test</p>
                </div>
                <div class="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Architect Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </Host>
    );
  }
}
