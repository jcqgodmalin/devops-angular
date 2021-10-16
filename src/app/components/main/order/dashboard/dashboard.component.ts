import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  orders!: Order[];

  constructor(private orderService : OrderService) { }


  ngOnInit(): void {
    this.getOrders();
  }

  public getOrders() {
    this.orders = this.orderService.getAllOrders();
  }

}
