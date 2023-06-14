import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  TuiRootModule,
} from '@taiga-ui/core';
import {WalletModule} from './app/wallet/wallet.module';
import { MyMaskPipe } from './pipes/my-mask.pipe';
import { MyConvertCasePipe } from './pipes/my-convert-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyMaskPipe,
    MyConvertCasePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    WalletModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
