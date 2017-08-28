import { Component } from '@angular/core';

@Component({
  selector: 'app-eth-testnet-warning',
  styleUrls: ['./eth-testnet-warning.component.css'],
  template: `
    <div class="alert alert-warning" role="alert">
        <strong>Warning:</strong>
        This service is configured to use the
            <a href="https://ropsten.etherscan.io">Ethereum Test Network (ropsten)</a>.
    </div>
  `
})
export class EthTestnetWarningComponent {

}
