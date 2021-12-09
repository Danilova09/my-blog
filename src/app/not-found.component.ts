import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="alert alert-danger">
      Page is not found!
    </div> `,
  styles: [`
    div {
      margin-top: 70px;
    }
  `],
})
export class NotFoundComponent {
}
