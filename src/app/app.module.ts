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
import {EthTransferService} from './eth-transfer/service/eth-transfer.service';
import {StubEthTransferService} from './eth-transfer/service/stub-eth-transfer.service';
import {ViewEthTransferComponent} from './eth-transfer/view-eth-transfer.component';
import {CreateTestContractComponent} from './test-service/create-test-contract.component';
import {ViewTestContractComponent} from './test-service/view-test-contract.component';
import {TestService} from './test-service/service/test.service';
import {StubTestService} from './test-service/service/stub-test.service';
import {HttpTestService} from './test-service/service/http-test.service';
import {AcesServerConfig, LocalAcesServerConfig, ProdAcesServerConfig} from './aces-server-config';
import {HttpEthTransferService} from './eth-transfer/service/http-eth-transfer.service';
import {EthTestnetWarningComponent} from './eth-testnet-warning/eth-testnet-warning.component';
import {ModalModule} from 'ngx-bootstrap';
import {ServiceInfoComponent} from './service-info/service-info.component';
import {PageLoadingComponent} from './page-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EthContractDeployComponent,
    ViewEthContractDeployComponent,
    EthTransferComponent,
    ViewEthTransferComponent,
    CreateTestContractComponent,
    ViewTestContractComponent,
    NoContentComponent,
    EthTestnetWarningComponent,
    ServiceInfoComponent,
    PageLoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ClipboardModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: AboutComponent },
      { path: 'about', component: AboutComponent },
      { path: 'eth-contract-deploy-contracts-create', component: EthContractDeployComponent },
      { path: 'eth-contract-deploy-contracts/:token', component: ViewEthContractDeployComponent },
      { path: 'eth-transfer-contracts-create', component: EthTransferComponent },
      { path: 'eth-transfer-contracts/:token', component: ViewEthTransferComponent },
      { path: 'test-contracts-create', component: CreateTestContractComponent },
      { path: 'test-contracts/:token', component: ViewTestContractComponent },
      { path: '**', component: NoContentComponent },
    ])
  ],
  providers: [
    { provide: AcesServerConfig, useClass: ProdAcesServerConfig },
    { provide: EthContractDeployService, useClass: HttpEthContractDeployService },
    { provide: EthTransferService, useClass: HttpEthTransferService },
    { provide: TestService, useClass: HttpTestService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
