import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Purchase} from '../../../../shared/models/Purchase';
import {isNumeric} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-wallet-add',
  templateUrl: './wallet-add.component.html',
  styleUrls: ['./wallet-add.component.less']
})
export class WalletAddComponent {
  @Output()
  add = new EventEmitter<Purchase>();

  form = new FormGroup({
    input1: new FormControl(null, Validators.required),
    input2: new FormControl(null, [Validators.required]),
    input3: new FormControl(null)
  });


  submit(): void {
    const d = new Date()
    let amm = this.form.get('input2')
    let s = Number(this.form.get('input2')?.value)
    if(!isNaN(s)) {
      this.add.emit({
        title: this.form.get('input1')?.value,
        price: Number(this.form.get('input2')?.value),
        coment: this.form.get('input3')?.value,
        date: d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds(),      })
      this.form.reset();
    }
  }

}
