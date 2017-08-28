import {
  Component, OnInit
} from '@angular/core';
import {CreateEthTransferForm, EthTransferService} from './service/eth-transfer.service';
import {Router} from '@angular/router';
import {ServiceInfo} from '../common/service-info';

@Component({
  selector: 'app-eth-transfer',
  templateUrl: './eth-transfer.component.html'
})
export class EthTransferComponent implements OnInit {

  serviceInfo: ServiceInfo;
  model = new CreateEthTransferForm();
  submitted = false;
  error = false;

  constructor(private router: Router, private ethTransferService: EthTransferService) {}

  ngOnInit(): void {
    this.ethTransferService.getServiceInfo().subscribe(serviceInfo => this.serviceInfo = serviceInfo);
  }

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
