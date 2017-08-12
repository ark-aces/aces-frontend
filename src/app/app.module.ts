import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AboutComponent} from './about/about.component';
import {NoContentComponent} from './no-content/no-content.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '',      component: AboutComponent },
      { path: 'about', component: AboutComponent },
      { path: '**',    component: NoContentComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
