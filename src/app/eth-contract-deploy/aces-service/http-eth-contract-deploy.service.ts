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
    return this.http.post('http://localhost:8080/contracts', createEthContractForm);
  }

  get(token: string): Observable<EthContractResponse> {
    return this.http.get<EthContractResponse>('http://localhost:8080/contracts/' + token);
  }

}
