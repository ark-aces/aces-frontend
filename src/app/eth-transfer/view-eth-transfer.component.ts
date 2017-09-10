import {
  Component, OnDestroy, OnInit
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import {EthTransferService, EthTransferResponse} from './service/eth-transfer.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-view-eth-transfer-contract',
  templateUrl: './view-eth-transfer.component.html'
})
export class ViewEthTransferComponent implements OnInit, OnDestroy {

  environment = environment;
  loading = true;
  lastUpdated: String;
  completed = false;
  failed = false;
  rejected = false;
  listening = false;
  routeParams: Subscription;
  token: string;
  contract: EthTransferResponse;
  pollingSubscription: Subscription;

  constructor(private ethTransferService: EthTransferService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeParams = this.route.params.subscribe(params => {
      this.token = params['token'];
      this.updateLastUpdated();

      this.ethTransferService.get(this.token).subscribe(contractResponse => {
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
              this.ethTransferService.get(this.token).subscribe(updatedContractResponse => {
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
