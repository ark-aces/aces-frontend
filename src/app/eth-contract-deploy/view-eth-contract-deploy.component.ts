import {
  Component, OnDestroy, OnInit
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import {EthContractDeployService, EthContractResponse} from './aces-service/eth-contract-deploy.service';

@Component({
  selector: 'app-view-eth-contract-deploy',
  templateUrl: './view-eth-contract-deploy.component.html'
})
export class ViewEthContractDeployComponent implements OnInit, OnDestroy {

  lastUpdated: String;
  completed = false;
  listening = false;
  routeParams: Subscription;
  token: string;
  contract: EthContractResponse;
  pollingSubscription: Subscription;

  constructor(private ethContractDeployService: EthContractDeployService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeParams = this.route.params.subscribe(params => {
      this.token = params['token'];
      this.lastUpdated = new Date().toISOString().split('.')[0] + 'Z';

      this.ethContractDeployService.get(this.token).subscribe(contractResponse => {
        this.contract = contractResponse;
        if (contractResponse.status === 'completed') {
          this.completed = true;
        }

        if (contractResponse.status === 'pending') {
          // poll contract data very second
          this.listening = true;
          this.pollingSubscription = IntervalObservable.create(1000)
            .subscribe(() => {
              this.ethContractDeployService.get(this.token).subscribe(updatedContractResponse => {
                this.lastUpdated = new Date().toISOString().split('.')[0] + 'Z';
                this.contract = updatedContractResponse;
                if (this.contract.status === 'completed') {
                  this.completed = true;
                  this.pollingSubscription.unsubscribe();
                  this.listening = false;
                }
              });
            });
        }
      });
    });
  }

  ngOnDestroy() {
    this.routeParams.unsubscribe();
  }
}
