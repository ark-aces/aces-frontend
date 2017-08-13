import {
  Component
} from '@angular/core';

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
  selector: 'eth-contract-deploy',
  templateUrl: './eth-contract-deploy.component.html'
})
export class EthContractDeployComponent {

  model = new CreateEthContractForm();

  submitted = false;

  contractResponse: EthContractResponse;

  onSubmit() {
    console.log('submitted data');
    console.log(JSON.stringify(this.model));

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

    this.submitted = true;
  }

}
