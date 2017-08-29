import { Component } from '@angular/core';

@Component({
  selector: 'app-eth-testnet-warning',
  styleUrls: ['./eth-testnet-warning.component.css'],
  template: `
    <div class="alert alert-warning" role="alert">
        <strong>Warning:</strong>
        This service is configured to use the
            <a href="https://ropsten.etherscan.io">Ethereum Testnet (ropsten) 
                <i class="fa fa-external-link"></i></a>.
            The Ark-Eth rate is 1/100 the real rate for Testnet transactions.
    </div>
  `
})
export class EthTestnetWarningComponent {

}
