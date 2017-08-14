import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CreateEthContractForm, EthContractDeployService, EthContractResponse} from './eth-contract-deploy.service';

@Injectable()
export class HttpEthContractDeployService extends EthContractDeployService {

  constructor(private http: HttpClient) {
    super();
  }

  create(createEthContractForm: CreateEthContractForm): Observable<EthContractResponse> {
    const input = new FormData();
    input.append('returnArkAddress', createEthContractForm.returnArkAddress);
    input.append('gasLimit', createEthContractForm.gasLimit.toString());
    input.append('abiJson', new Blob([createEthContractForm.abiJson], {type: 'text/plain'}));
    input.append('code', new Blob([createEthContractForm.code], {type: 'text/plain'}));
    input.append('params', new Blob([createEthContractForm.paramsJson], {type: 'text/plain'}));

    return this.http.post('https://aces-ark.io/aces-api/contracts', input);
  }

  get(token: string): Observable<EthContractResponse> {
    return this.http.get<EthContractResponse>('https://aces-ark.io/aces-api/contracts/' + token);
  }

}
