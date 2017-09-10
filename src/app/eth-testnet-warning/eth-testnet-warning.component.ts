import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-eth-testnet-warning',
  styleUrls: ['./eth-testnet-warning.component.css'],
  template: `
    <div hidden="! environment.showEthTestnetWarning" class="alert alert-warning" role="alert">
        <strong>Warning:</strong>
        This service is configured to use the
            <a href="{{ environment.etherscanBaseUrl }}">Ethereum Testnet ({{ environment.ethNetworkName }})
                <i class="fa fa-external-link"></i></a>.
            The Ark-Eth rate used is {{ environment.ethArkRateFraction }} the real rate.
    </div>
  `
})
export class EthTestnetWarningComponent {

  public environment = environment;

}
