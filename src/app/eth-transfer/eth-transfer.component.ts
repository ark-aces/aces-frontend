import {
  Component
} from '@angular/core';
import {CreateEthTransferForm, EthTransferService} from './service/eth-transfer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-eth-transfer',
  templateUrl: './eth-transfer.component.html'
})
export class EthTransferComponent {

  model = new CreateEthTransferForm();
  submitted = false;
  error = false;

  constructor(private router: Router, private ethTransferService: EthTransferService) {}

  onSubmit() {
    this.submitted = true;

    this.ethTransferService.create(this.model)
      .subscribe(
        contractResponse => {
          this.router.navigate(['eth-transfer-contracts', contractResponse.token]);
        },
        error => {
          console.log(error);
          this.error = true;
          this.submitted = false;
        }
      );
  }

}
