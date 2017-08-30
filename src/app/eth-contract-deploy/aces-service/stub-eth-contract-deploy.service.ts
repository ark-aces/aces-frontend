import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CreateEthContractForm, EthContractDeployService, EthContractResponse} from './eth-contract-deploy.service';
import 'rxjs/add/observable/of';
import {ServiceInfo} from '../../common/service-info';

@Injectable()
export class StubEthContractDeployService extends EthContractDeployService {

  pendingContractResponseStub: EthContractResponse = {
    token: 'abe05cd7-40c2-4fb0-a4a7-8d2f76e74978',
    createdAt: '2017-07-04T21:59:38.129Z',
    status: 'pending',
    returnArkAddress: 'AewU1vEmPrtQNjdVo33cX84bfovY3jNAkV',
    contractCode: '0x93498273498234823094823908402938402983409283409823094820934823',
    contractAbiJson: '{}',
    contractParamsJson: '{}',
    gasLimit: 500000,
    serviceArkAddress: 'ARNJJruY6RcuYCXcwWsu4bx9kyZtntqeAx',
    arkPerEthExchangeRate: '1.0',
    estimatedGasCost: 214411,
    estimatedEthCost: '4.000000',
    arkFlatFee: '0',
    arkFeePercent: '0',
    arkFeeTotal: '0',
    requiredArkCost: '4.0000'
  };

  completedContractResponseStub: EthContractResponse = {
    token: 'abe05cd7-40c2-4fb0-a4a7-8d2f76e74978',
    createdAt: '2017-07-04T21:59:38.129Z',
    status: 'completed',
    returnArkAddress: 'AewU1vEmPrtQNjdVo33cX84bfovY3jNAkV',
    contractCode: '0x93498273498234823094823908402938402983409283409823094820934823',
    contractAbiJson: '{}',
    contractParamsJson: '{}',
    gasLimit: 500000,
    serviceArkAddress: 'ARNJJruY6RcuYCXcwWsu4bx9kyZtntqeAx',
    arkPerEthExchangeRate: '1.0',
    estimatedGasCost: 214411,
    estimatedEthCost: '4.000000',
    requiredArkCost: '4.00000000',
    deploymentArkCost: '2.000000000',
    contractTransactionHash: '500224999259823996',
    contractAddress: '0xdaa24d02bad7e9d6a80106db164bad9399a0423e',
    gasUsed: 214411,
    arkFlatFee: '0',
    arkFeePercent: '0',
    arkFeeTotal: '0',
    returnArkAmount: '2.00000000',
    returnArkTransactionId: '49f55381c5c3c70f96d848df53ab7f9ae9881dbb8eb43e8f91f642018bf1258f'
  };

  getServiceInfo(): Observable<ServiceInfo> {
    return Observable.of({
       capacity: '100 Eth',
       flatFeeArk: '1 Ark',
       percentFee: '1.25%',
       status: 'Up'
     });
  }

  create(createEthContractForm: CreateEthContractForm): Observable<EthContractResponse> {
    return Observable.of(this.pendingContractResponseStub);
  }

  get(token: string): Observable<EthContractResponse> {
    return Observable.of(this.completedContractResponseStub);
  }

}
