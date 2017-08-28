import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.css']
})
export class ServiceInfoComponent {
  @Input() capacity: string;
  @Input() flatFeeArk: string;
  @Input() percentFee: string;
  @Input() status: string;
}
