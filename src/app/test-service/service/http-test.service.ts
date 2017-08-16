import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CreateTestContractForm, TestService, TestContractResponse} from './test.service';

@Injectable()
export class HttpTestService extends TestService {

  constructor(private http: HttpClient) {
    super();
  }

  create(createEthTransferForm: CreateTestContractForm): Observable<TestContractResponse> {
    const input = new FormData();
    input.append('returnArkAddress', createEthTransferForm.returnArkAddress);
    input.append('donationArkAmount', createEthTransferForm.donationArkAmount);

    return this.http.post('https://aces-ark.io/aces-api/test-contracts', input);
  }

  get(token: string): Observable<TestContractResponse> {
    return this.http.get<TestContractResponse>('https://aces-ark.io/aces-api/test-contracts/' + token);
  }

}
