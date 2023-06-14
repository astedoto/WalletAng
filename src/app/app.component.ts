import { Component } from '@angular/core';
import { myEnum } from 'src/shared/myEnum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  myE: typeof myEnum = myEnum;
  cardNumber = "1234 5678 1234 5678"
  title1 = "hello world"
  title2 = "HELLO world"
}
