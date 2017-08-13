import {
  Component
} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

export class CreateEthContractForm {
  returnArkAddress: string;
  abiJson: string;
  code: string;
  paramsJson: string;
  gasLimit: number;
}

export class EthContractResponse {
  token: string;
  createdAt: string;
  status: string;
  returnArkAddress: string;
  contractCode: string;
  contractAbiJson: string;
  contractParamsJson: string;
  gasLimit: number;
  serviceArkAddress: string;
  arkPerEthExchangeRate: string;
  estimatedGasCost: number;
  estimatedEthCost: string;
  requiredArkCost: string;
  deploymentArkCost?: string;
  contractTransactionHash?: string;
  contractAddress?: string;
  gasUsed?: number;
  returnArkAmount?: string;
  returnArkTransactionId?: string;
}

@Component({
  selector: 'app-eth-contract-deploy',
  templateUrl: './eth-contract-deploy.component.html'
})
export class EthContractDeployComponent {

  model = new CreateEthContractForm();
  submitted = false;
  contractResponse: EthContractResponse;

  constructor(private router: Router, private httpClient: HttpClient) {}

  onSubmit() {
    this.submitted = true;

    this.router.navigate(['eth-contract-deploy', '91u4981u24012']);

    // this.httpClient.get<EthContractResponse>('https://aces-ark.io/contracts')
    //   .subscribe(contractResponse => {
    //     this.router.navigate(['eth-contract-deploy', contractResponse.token]);
    //   });

    // todo: do actual http request to get contract response
    this.contractResponse = {
      token: 'abe05cd7-40c2-4fb0-a4a7-8d2f76e74978',
      createdAt: '2017-07-04T21:59:38.129Z',
      status: 'pending',
      returnArkAddress: 'AewU1vEmPrtQNjdVo33cX84bfovY3jNAkV',
      contractCode: this.model.code,
      contractAbiJson: this.model.abiJson,
      contractParamsJson: this.model.paramsJson,
      gasLimit: 500000,
      serviceArkAddress: 'service_ark_address',
      arkPerEthExchangeRate: 'ark_per_eth',
      estimatedGasCost: 214411,
      estimatedEthCost: '4.000000',
      requiredArkCost: '4.0000'
    };

  }

}
