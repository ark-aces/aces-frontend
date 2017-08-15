import {
  Component, OnDestroy, OnInit
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import {EthTransferService, EthTransferResponse} from './service/eth-transfer.service';

@Component({
  selector: 'app-view-transfer-deploy',
  templateUrl: './view-eth-transfer.component.html'
})
export class ViewEthTransferComponent implements OnInit, OnDestroy {

  lastUpdated: String;
  completed = false;
  listening = false;
  routeParams: Subscription;
  token: string;
  contract: EthTransferResponse;
  pollingSubscription: Subscription;

  constructor(private EthTransferService: EthTransferService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeParams = this.route.params.subscribe(params => {
      this.token = params['token'];
      this.updateLastUpdated();

      this.EthTransferService.get(this.token).subscribe(contractResponse => {
        this.contract = contractResponse;
        if (contractResponse.status === 'completed') {
          this.completed = true;
        }

        if (contractResponse.status === 'pending') {
          // poll contract data very second
          this.listening = true;
          this.pollingSubscription = IntervalObservable.create(1000)
            .subscribe(() => {
              this.EthTransferService.get(this.token).subscribe(updatedContractResponse => {
                this.updateLastUpdated();
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

  private updateLastUpdated() {
    this.lastUpdated = new Date().toISOString().split('.')[0] + 'Z';
  }

  ngOnDestroy() {
    this.routeParams.unsubscribe();
  }
}
