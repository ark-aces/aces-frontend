import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AboutComponent} from './about/about.component';
import {NoContentComponent} from './no-content/no-content.component';
import {RouterModule} from '@angular/router';
import {EthContractDeployComponent} from './eth-contract-deploy/eth-contract-deploy.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {EthTransferComponent} from './eth-transfer/eth-transfer.component';
import {ViewEthContractDeployComponent} from './eth-contract-deploy/view-eth-contract-deploy.component';
import {HttpClientModule} from '@angular/common/http';
import {ClipboardModule} from 'ngx-clipboard/dist';
import {EthContractDeployService} from './eth-contract-deploy/aces-service/eth-contract-deploy.service';
import {HttpEthContractDeployService} from './eth-contract-deploy/aces-service/http-eth-contract-deploy.service';
import {StubEthContractDeployService} from './eth-contract-deploy/aces-service/stub-eth-contract-deploy.service';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EthContractDeployComponent,
    EthTransferComponent,
    ViewEthContractDeployComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ClipboardModule,
    RouterModule.forRoot([
      { path: '',      component: AboutComponent },
      { path: 'about', component: AboutComponent },
      { path: 'eth-contract-deploy', component: EthContractDeployComponent },
      { path: 'eth-contract-deploy/:token', component: ViewEthContractDeployComponent },
      { path: 'eth-transfer', component: EthTransferComponent },
      { path: '**',    component: NoContentComponent },
    ])
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/aces-app' },
    { provide: EthContractDeployService, useClass: StubEthContractDeployService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
