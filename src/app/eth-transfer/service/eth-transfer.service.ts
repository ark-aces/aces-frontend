import {Observable} from 'rxjs/Observable';
import {ServiceInfo} from '../../common/service-info';

export class CreateEthTransferForm {
  returnArkAddress: string;
  recipientEthAddress: string;
  ethAmount: string;
}

export class EthTransferResponse {
  token: string;
  createdAt: string;
  status: string;
  returnArkAddress: string;
  recipientEthAddress: string;
  arkPerEthExchangeRate: string;
  ethAmount: string;
  serviceArkAddress: string;
  requiredArkAmount: string;
  ethTransactionHash?: string;
}

export abstract class EthTransferService {
  abstract getServiceInfo(): Observable<ServiceInfo>;
  abstract create(createEthTransferForm: CreateEthTransferForm): Observable<EthTransferResponse>;
  abstract get(token: string): Observable<EthTransferResponse>;
}
