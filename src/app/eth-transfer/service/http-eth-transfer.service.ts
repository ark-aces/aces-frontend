import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CreateEthTransferForm, EthTransferService, EthTransferResponse} from './eth-transfer.service';

@Injectable()
export class HttpEthTransferService extends EthTransferService {

  constructor(private http: HttpClient) {
    super();
  }

  create(createEthTransferForm: CreateEthTransferForm): Observable<EthTransferResponse> {
    const input = new FormData();
    input.append('returnArkAddress', createEthTransferForm.returnArkAddress);
    input.append('recipientEthAddress', createEthTransferForm.recipientEthAddress);
    input.append('ethAmount', createEthTransferForm.ethAmount);

    return this.http.post('https://aces-ark.io/aces-api/eth-transfers', input);
  }

  get(token: string): Observable<EthTransferResponse> {
    return this.http.get<EthTransferResponse>('https://aces-ark.io/aces-api/eth-transfers/' + token);
  }

}
