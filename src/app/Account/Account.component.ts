import { Component, OnInit } from "@angular/core";

@Component({
  selector: "Account",
  templateUrl: "./Account.component.html",
  styleUrls: ["./Account.component.css"]
})
export class AccountComponent implements OnInit {
  constructor() {}

  strName = "Capital Super Saver Bal= US$10M";
  ngOnInit() {}
}
