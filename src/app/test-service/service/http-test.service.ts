import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CreateTestContractForm, TestService, TestContractResponse} from './test.service';
import {AcesServerConfig} from '../../aces-server-config';
import {ServiceInfo} from '../../common/service-info';

@Injectable()
export class HttpTestService extends TestService {

  constructor(private acesServerConfig: AcesServerConfig, private http: HttpClient) {
    super();
  }

  getServiceInfo(): Observable<ServiceInfo> {
    return this.http.get(this.acesServerConfig.getBaseUrl() + '/test-service-info');
  }

  create(createTestContractForm: CreateTestContractForm): Observable<TestContractResponse> {
    console.log('create: ' + JSON.stringify(createTestContractForm));

    const input = new FormData();
    input.append('returnArkAddress', createTestContractForm.returnArkAddress);
    input.append('donationArkAmount', createTestContractForm.donationArkAmount);

    return this.http.post(this.acesServerConfig.getBaseUrl() + '/test-contracts', input);
  }

  get(token: string): Observable<TestContractResponse> {
    return this.http.get<TestContractResponse>(this.acesServerConfig.getBaseUrl() + '/test-contracts/' + token);
  }

}
