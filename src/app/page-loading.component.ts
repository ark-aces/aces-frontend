import {Component} from '@angular/core';

@Component({
  selector: 'app-page-loading',
  template: `
    <p style="font-size: 22px; margin-top: 1em">
      <i class="fa fa-spinner fa-spin fa-fw" aria-hidden="true"></i> Loading...
    </p>
  `
})
export class PageLoadingComponent {
}
