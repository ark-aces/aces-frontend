import {Observable} from 'rxjs/Observable';
import {ServiceInfo} from '../../common/service-info';

export class CreateTestContractForm {
  returnArkAddress: string;
  donationArkAmount: string;
}

export class TestContractResponse {
  token: string;
  createdAt: string;
  status: string;
  donationArkAmount: string;
  returnArkAddress: string;
  serviceArkAddress: string;
  requiredArkAmount: string;
  returnArkAmount?: string;
  returnArkTransactionId?: string;
}

export abstract class TestService {
  abstract getServiceInfo(): Observable<ServiceInfo>;
  abstract create(form: CreateTestContractForm): Observable<TestContractResponse>;
  abstract get(token: string): Observable<TestContractResponse>;
}
