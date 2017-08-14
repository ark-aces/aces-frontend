import {Observable} from 'rxjs/Observable';

export class CreateEthContractForm {
  returnArkAddress: string;
  abiJson: string;
  code: string;
  paramsJson: string;
  gasLimit: number;
}

export class EthContractResponse {
  token: string;
  createdAt: string;
  status: string;
  returnArkAddress: string;
  contractCode: string;
  contractAbiJson: string;
  contractParamsJson: string;
  gasLimit: number;
  serviceArkAddress: string;
  arkPerEthExchangeRate: string;
  estimatedGasCost: number;
  estimatedEthCost: string;
  requiredArkCost: string;
  deploymentArkCost?: string;
  contractTransactionHash?: string;
  contractAddress?: string;
  gasUsed?: number;
  returnArkAmount?: string;
  returnArkTransactionId?: string;
}

export abstract class EthContractDeployService {
  abstract create(createEthContractForm: CreateEthContractForm): Observable<EthContractResponse>;
  abstract get(token: string): Observable<EthContractResponse>;
}
