import {
  Component, OnDestroy, OnInit
} from '@angular/core';
import {EthContractResponse} from './eth-contract-deploy.component';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-view-eth-contract-deploy',
  templateUrl: './view-eth-contract-deploy.component.html'
})
export class ViewEthContractDeployComponent implements OnInit, OnDestroy {

  pending = true;
  routeParams: Subscription;
  token: string;
  contract: EthContractResponse;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeParams = this.route.params.subscribe(params => {
      this.token = params['token'];

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
