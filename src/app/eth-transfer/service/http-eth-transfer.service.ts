import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CreateEthTransferForm, EthTransferService, EthTransferResponse} from './eth-transfer.service';
import {ServiceInfo} from '../../common/service-info';
import {AcesServerConfig} from '../../aces-server-config';

@Injectable()
export class HttpEthTransferService extends EthTransferService {

  constructor(private http: HttpClient, private acesServerConfig: AcesServerConfig) {
    super();
  }

  getServiceInfo(): Observable<ServiceInfo> {
    return this.http.get(this.acesServerConfig.getBaseUrl() + '/eth-transfer-service-info');
  }

  create(createEthTransferForm: CreateEthTransferForm): Observable<EthTransferResponse> {
    const input = new FormData();
    input.append('returnArkAddress', createEthTransferForm.returnArkAddress);
    input.append('recipientEthAddress', createEthTransferForm.recipientEthAddress);
    input.append('ethAmount', createEthTransferForm.ethAmount);

    return this.http.post(this.acesServerConfig.getBaseUrl() + '/eth-transfer-contracts', input);
  }

  get(token: string): Observable<EthTransferResponse> {
    return this.http.get<EthTransferResponse>(this.acesServerConfig.getBaseUrl() + '/eth-transfer-contracts/' + token);
  }

}
