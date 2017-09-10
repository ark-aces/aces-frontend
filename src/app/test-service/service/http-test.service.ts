import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CreateTestContractForm, TestService, TestContractResponse} from './test.service';
import {ServiceInfo} from '../../common/service-info';
import {environment} from '../../../environments/environment';

@Injectable()
export class HttpTestService extends TestService {

  private environment = environment;

  constructor(private http: HttpClient) {
    super();
  }

  getServiceInfo(): Observable<ServiceInfo> {
    return this.http.get(this.environment.acesApiBaseUrl + '/test-service-info');
  }

  create(createTestContractForm: CreateTestContractForm): Observable<TestContractResponse> {
    console.log('create: ' + JSON.stringify(createTestContractForm));

    const input = new FormData();
    input.append('returnArkAddress', createTestContractForm.returnArkAddress);
    input.append('donationArkAmount', createTestContractForm.donationArkAmount);

    return this.http.post(this.environment.acesApiBaseUrl + '/test-contracts', input);
  }

  get(token: string): Observable<TestContractResponse> {
    return this.http.get<TestContractResponse>(this.environment.acesApiBaseUrl + '/test-contracts/' + token);
  }

}
