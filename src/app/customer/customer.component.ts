import { Component, OnInit } from "@angular/core";

@Component({
  selector: "customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  constructor() {}
  strName: string;
  strEmail: string;
  strDOB: Date;
  ngOnInit() {
    this.strName = "Ernest - The Best!";
    this.strEmail = "eredwardsjm@gmail.com";
    this.strDOB = new Date("1982/10/07");
  }
}
