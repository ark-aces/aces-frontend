///<reference path="../../../node_modules/rxjs/add/operator/takeWhile.d.ts"/>
import {
  Component, OnDestroy, OnInit
} from '@angular/core';
import {EthContractResponse} from './eth-contract-deploy.component';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-view-eth-contract-deploy',
  templateUrl: './view-eth-contract-deploy.component.html'
})
export class ViewEthContractDeployComponent implements OnInit, OnDestroy {

  lastUpdated: String;
  completed = false;
  pending = true;
  routeParams: Subscription;
  token: string;
  contract: EthContractResponse;
  pollingSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeParams = this.route.params.subscribe(params => {
      this.token = params['token'];
      this.lastUpdated = new Date().toISOString().split('.')[0] + 'Z';

      this.pollingSubscription = IntervalObservable.create(5000)
        .subscribe(() => {
          this.lastUpdated = new Date().toISOString().split('.')[0] + 'Z';
          this.contract = {
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
            returnArkAmount: '2.00000000',
            returnArkTransactionId: '49f55381c5c3c70f96d848df53ab7f9ae9881dbb8eb43e8f91f642018bf1258f'
          };
          if (this.contract.status === 'completed') {
            this.completed = true;
            this.pollingSubscription.unsubscribe();
          }
        });

      // todo: get data from actual http request
      this.contract = {
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
        requiredArkCost: '4.0000'
      };
    });
  }

  ngOnDestroy() {
    this.routeParams.unsubscribe();
  }
}
