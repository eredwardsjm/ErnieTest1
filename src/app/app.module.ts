import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CustomerComponent } from "./customer/customer.component";
import { AccountComponent } from "./Account/Account.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, CustomerComponent, AccountComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "Customer", component: CustomerComponent },
      { path: "Account", component: AccountComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
