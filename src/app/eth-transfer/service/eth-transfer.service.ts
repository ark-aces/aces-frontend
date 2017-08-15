import {Observable} from 'rxjs/Observable';

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
  ethAmount: string;
  serviceArkAddress: string;
  requiredArkAmount: string;
  ethTransactionHash?: string;
}

export abstract class EthTransferService {
  abstract create(createEthTransferForm: CreateEthTransferForm): Observable<EthTransferResponse>;
  abstract get(token: string): Observable<EthTransferResponse>;
}
