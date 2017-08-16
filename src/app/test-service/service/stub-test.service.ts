import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CreateTestContractForm, TestService, TestContractResponse} from './test.service';
import 'rxjs/add/observable/of';

@Injectable()
export class StubTestService extends TestService {

  pendingContractResponseStub: TestContractResponse = {
    token: 'abe05cd7-40c2-4fb0-a4a7-8d2f76e74978',
    createdAt: '2017-07-04T21:59:38.129Z',
    status: 'pending',
    returnArkAddress: 'AewU1vEmPrtQNjdVo33cX84bfovY3jNAkV',
    donationArkAmount: '1.00',
    serviceArkAddress: 'ARNJJruY6RcuYCXcwWsu4bx9kyZtntqeAx',
    requiredArkAmount: '4.0000'
  };

  completedContractResponseStub: TestContractResponse = {
    token: 'abe05cd7-40c2-4fb0-a4a7-8d2f76e74978',
    createdAt: '2017-07-04T21:59:38.129Z',
    status: 'pending',
    returnArkAddress: 'AewU1vEmPrtQNjdVo33cX84bfovY3jNAkV',
    donationArkAmount: '1.00',
    serviceArkAddress: 'ARNJJruY6RcuYCXcwWsu4bx9kyZtntqeAx',
    requiredArkAmount: '4.0000',
    returnArkAmount: '1.000',
    returnArkTransactionId: '500224999259823996'
  };

  create(createTestContractForm: CreateTestContractForm): Observable<TestContractResponse> {
    return Observable.of(this.pendingContractResponseStub);
  }

  get(token: string): Observable<TestContractResponse> {
    return Observable.of(this.completedContractResponseStub);
  }

}
