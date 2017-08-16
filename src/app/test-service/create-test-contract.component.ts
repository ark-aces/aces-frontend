import {
  Component
} from '@angular/core';
import {CreateTestContractForm, TestService} from './service/test.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-test-contract',
  templateUrl: './create-test-contract.component.html'
})
export class CreateTestContractComponent {

  model = new CreateTestContractForm();
  submitted = false;
  error = false;

  constructor(private router: Router, private testService: TestService) {}

  onSubmit() {
    this.submitted = true;

    this.testService.create(this.model)
      .subscribe(
        contractResponse => {
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
