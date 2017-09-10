import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CreateEthContractForm, EthContractDeployService, EthContractResponse} from './eth-contract-deploy.service';
import {ServiceInfo} from '../../common/service-info';
import {environment} from '../../../environments/environment';

@Injectable()
export class HttpEthContractDeployService extends EthContractDeployService {

  private environment = environment;

  constructor(private http: HttpClient) {
    super();
  }

  getServiceInfo(): Observable<ServiceInfo> {
    return this.http.get(this.environment.acesApiBaseUrl + '/eth-contract-deploy-service-info');
  }

  create(createEthContractForm: CreateEthContractForm): Observable<EthContractResponse> {
    const input = new FormData();
    input.append('returnArkAddress', createEthContractForm.returnArkAddress);
    input.append('gasLimit', createEthContractForm.gasLimit.toString());
    input.append('abiJson', new Blob([createEthContractForm.abiJson], {type: 'text/plain'}));
    input.append('code', new Blob([createEthContractForm.code], {type: 'text/plain'}));
    input.append('params', new Blob([createEthContractForm.paramsJson], {type: 'text/plain'}));

    return this.http.post(this.environment.acesApiBaseUrl + '/eth-contract-deploy-contracts', input);
  }

  get(token: string): Observable<EthContractResponse> {
    return this.http.get<EthContractResponse>(this.environment.acesApiBaseUrl + '/eth-contract-deploy-contracts/' + token);
  }

}
