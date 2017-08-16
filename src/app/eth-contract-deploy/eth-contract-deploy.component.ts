import {
  Component
} from '@angular/core';
import {Router} from '@angular/router';
import {
  CreateEthContractForm,
  EthContractDeployService,
} from './aces-service/eth-contract-deploy.service';

@Component({
  selector: 'app-eth-contract-deploy',
  templateUrl: './eth-contract-deploy.component.html'
})
export class EthContractDeployComponent {

  model = new CreateEthContractForm();
  submitted = false;
  error = false;

  constructor(private router: Router, private ethContractDeployService: EthContractDeployService) {}

  onSubmit() {
    this.submitted = true;

    this.ethContractDeployService.create(this.model)
      .subscribe(
        contractResponse => {
          this.router.navigate(['eth-contract-deploy-contracts', contractResponse.token]);
        },
        error => {
          console.log(error);
          this.error = true;
          this.submitted = false;
        }
      );
  }

}
