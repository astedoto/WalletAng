import { Component, OnInit } from '@angular/core';
import {Purchase} from '../../../shared/models/Purchase';

const data: Purchase[] = [
  {
    title: 'Проезд на метро',
    price: 40,
    coment: 'c1',
    date: '15:34:42'
  },
  {
    title: 'Iphone Pro Max XXL',
    price: 100500,
    coment: 'c2',
    date: '15:34:42'
  },
  {
    title: 'Доширак (острый)',
    price: 123,
    coment: 'c3',
    date: '15:34:42'
  },
  {
    title: 'Доширак',
    price: 100,
    coment: 'c4',
    date: '15:34:42'
  }
];

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.less']
})
export class WalletComponent implements OnInit {
  purchases: Purchase[] = [];
  expanded = false;
  showDiscount = false;
  summary = 0;
  summaryDiscount = 0;

  ngOnInit(): void {
    this.purchases = data;
    // this.purchases.push({title:'123', price:313312, coment:'nkosdf', date:'123'})
    // this.purchases.push({title:'123312', price:312, coment:'ngadf'})
    console.log(data)
    this.updateSummary();
  }

  addPurchase(purchase: Purchase): void {
      this.purchases.push(purchase);
      this.updateSummary();
      this.toggle();
  }

  toggle(): void {
    this.expanded = !this.expanded;
  }

  private updateSummary(): void {
    this.summary = this.purchases.reduce((sum, p) => p.price + sum, 0);
    this.summaryDiscount = Math.floor(0.9 * (this.purchases.reduce((sum, p) => p.price + sum, 0)));
    if(this.purchases.length >= 6) {
      this.showDiscount = true
    } else {
      this.showDiscount = false
    }
  }
}
