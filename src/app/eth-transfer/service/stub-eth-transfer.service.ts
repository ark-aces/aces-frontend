import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CreateEthTransferForm, EthTransferService, EthTransferResponse} from './eth-transfer.service';
import 'rxjs/add/observable/of';
import {ServiceInfo} from '../../common/service-info';

@Injectable()
export class StubEthTransferService extends EthTransferService {

  pendingContractResponseStub: EthTransferResponse = {
    token: 'abe05cd7-40c2-4fb0-a4a7-8d2f76e74978',
    createdAt: '2017-07-04T21:59:38.129Z',
    status: 'pending',
    returnArkAddress: 'AewU1vEmPrtQNjdVo33cX84bfovY3jNAkV',
    recipientEthAddress: '0xdaa24d02bad7e9d6a80106db164bad9399a0423e',
    arkPerEthExchangeRate: '1.0000',
    ethAmount: '1.00',
    serviceArkAddress: 'ARNJJruY6RcuYCXcwWsu4bx9kyZtntqeAx',
    arkFlatFee: '0',
    arkFeePercent: '0',
    arkFeeTotal: '0',
    requiredArkAmount: '4.0000'
  };

  completedContractResponseStub: EthTransferResponse = {
    token: 'abe05cd7-40c2-4fb0-a4a7-8d2f76e74978',
    createdAt: '2017-07-04T21:59:38.129Z',
    status: 'pending',
    returnArkAddress: 'AewU1vEmPrtQNjdVo33cX84bfovY3jNAkV',
    recipientEthAddress: '0xdaa24d02bad7e9d6a80106db164bad9399a0423e',
    arkPerEthExchangeRate: '1.0000',
    ethAmount: '1.00',
    serviceArkAddress: 'ARNJJruY6RcuYCXcwWsu4bx9kyZtntqeAx',
    arkFlatFee: '0',
    arkFeePercent: '0',
    arkFeeTotal: '0',
    requiredArkAmount: '4.0000',
    ethTransactionHash: '49f55381c5c3c70f96d848df53ab7f9ae9881dbb8eb43e8f91f642018bf1258f'
  };

  getServiceInfo(): Observable<ServiceInfo> {
    return Observable.of({
      capacity: '100 Eth',
      flatFeeArk: '1 Ark',
      percentFee: '1.25%',
      status: 'Up'
    });
  }

  create(createEthTransferForm: CreateEthTransferForm): Observable<EthTransferResponse> {
    return Observable.of(this.pendingContractResponseStub);
  }

  get(token: string): Observable<EthTransferResponse> {
    return Observable.of(this.completedContractResponseStub);
  }

}
