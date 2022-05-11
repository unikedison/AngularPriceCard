import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent implements OnInit {

  @Input() price = "";
  @Input() id = "";
  @Input() name = "";
  @Input() features: any;
  constructor() { }

  ngOnInit(): void {
  }

  doAction(id: string){
    alert(id)
  }

}
