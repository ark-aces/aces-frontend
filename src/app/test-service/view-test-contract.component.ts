import {
  Component, OnDestroy, OnInit
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import {TestService, TestContractResponse} from './service/test.service';

@Component({
  selector: 'app-view-test-contract',
  templateUrl: './view-test-contract.component.html'
})
export class ViewTestContractComponent implements OnInit, OnDestroy {

  lastUpdated: String;
  completed = false;
  listening = false;
  routeParams: Subscription;
  token: string;
  contract: TestContractResponse;
  pollingSubscription: Subscription;

  constructor(private testService: TestService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeParams = this.route.params.subscribe(params => {
      this.token = params['token'];
      this.updateLastUpdated();

      this.testService.get(this.token).subscribe(contractResponse => {
        this.contract = contractResponse;
        if (contractResponse.status === 'completed') {
          this.completed = true;
        }

        if (contractResponse.status === 'pending') {
          // poll contract data very second
          this.listening = true;
          this.pollingSubscription = IntervalObservable.create(1000)
            .subscribe(() => {
              this.testService.get(this.token).subscribe(updatedContractResponse => {
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
