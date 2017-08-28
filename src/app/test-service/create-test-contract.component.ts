import {
  Component, OnInit
} from '@angular/core';
import {CreateTestContractForm, TestService} from './service/test.service';
import {Router} from '@angular/router';
import {ServiceInfo} from '../common/service-info';

@Component({
  selector: 'app-create-test-contract',
  templateUrl: './create-test-contract.component.html'
})
export class CreateTestContractComponent implements OnInit {

  serviceInfoLoading = true;
  serviceInfo: ServiceInfo;
  model = new CreateTestContractForm();
  submitted = false;
  error = false;

  constructor(private router: Router, private testService: TestService) {}

  ngOnInit() {
    this.testService.getServiceInfo().subscribe(serviceInfo => {
      this.serviceInfo = serviceInfo;
      setTimeout(() => this.serviceInfoLoading = false, 1000);
    });
  }

  onSubmit() {
    this.submitted = true;

    this.testService.create(this.model)
      .subscribe(
        contractResponse => {
          console.log(JSON.stringify(contractResponse));
          this.router.navigate(['test-contracts', contractResponse.token]);
        },
        error => {
          console.log(error);
          this.error = true;
          this.submitted = false;
        }
      );
  }

}
