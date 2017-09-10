import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CreateEthTransferForm, EthTransferService, EthTransferResponse} from './eth-transfer.service';
import {ServiceInfo} from '../../common/service-info';
import {environment} from '../../../environments/environment';

@Injectable()
export class HttpEthTransferService extends EthTransferService {

  private environment = environment;

  constructor(private http: HttpClient) {
    super();
  }

  getServiceInfo(): Observable<ServiceInfo> {
    return this.http.get(this.environment.acesApiBaseUrl + '/eth-transfer-service-info');
  }

  create(createEthTransferForm: CreateEthTransferForm): Observable<EthTransferResponse> {
    const input = new FormData();
    input.append('returnArkAddress', createEthTransferForm.returnArkAddress);
    input.append('recipientEthAddress', createEthTransferForm.recipientEthAddress);
    input.append('ethAmount', createEthTransferForm.ethAmount);

    return this.http.post(this.environment.acesApiBaseUrl + '/eth-transfer-contracts', input);
  }

  get(token: string): Observable<EthTransferResponse> {
    return this.http.get<EthTransferResponse>(this.environment.acesApiBaseUrl + '/eth-transfer-contracts/' + token);
  }

}
