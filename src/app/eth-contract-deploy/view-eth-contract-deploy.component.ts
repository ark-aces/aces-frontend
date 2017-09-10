import {
  Component, OnDestroy, OnInit
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import {EthContractDeployService, EthContractResponse} from './aces-service/eth-contract-deploy.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-view-eth-contract-deploy',
  templateUrl: './view-eth-contract-deploy.component.html'
})
export class ViewEthContractDeployComponent implements OnInit, OnDestroy {

  environment = environment;
  loading = true;
  lastUpdated: String;
  completed = false;
  failed = false;
  rejected = false;
  listening = false;
  routeParams: Subscription;
  token: string;
  contract: EthContractResponse;
  pollingSubscription: Subscription;

  constructor(private ethContractDeployService: EthContractDeployService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeParams = this.route.params.subscribe(params => {
      this.token = params['token'];
      this.updateLastUpdated();

      this.ethContractDeployService.get(this.token).subscribe(contractResponse => {
        this.contract = contractResponse;
        if (contractResponse.status === 'completed') {
          this.completed = true;
        } else if (contractResponse.status === 'rejected') {
          this.rejected = true;
        } else if (contractResponse.status === 'failed') {
          this.failed = true;
        } else if (contractResponse.status === 'pending') {
          // poll contract data very second
          this.listening = true;
          this.pollingSubscription = IntervalObservable.create(1000)
            .subscribe(() => {
              this.ethContractDeployService.get(this.token).subscribe(updatedContractResponse => {
                this.updateLastUpdated();
                this.contract = updatedContractResponse;
                if (this.contract.status !== 'pending') {
                  if (updatedContractResponse.status === 'completed') {
                    this.completed = true;
                  }
                  if (updatedContractResponse.status === 'rejected') {
                    this.rejected = true;
                  }
                  if (updatedContractResponse.status === 'failed') {
                    this.failed = true;
                  }
                  this.pollingSubscription.unsubscribe();
                  this.listening = false;
                }
              });
            });
        }
        this.loading = false;
      });
    });
  }

  private updateLastUpdated() {
    this.lastUpdated = new Date().toISOString().split('.')[0] + 'Z';
  }

  ngOnDestroy() {
    this.routeParams.unsubscribe();
  }
}
