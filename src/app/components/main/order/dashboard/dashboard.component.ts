import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CafeClerk } from 'src/app/model/cafeclerk';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  addOrderForm! : FormGroup;

  orders!: Order[];
  clerk! : CafeClerk;

  constructor(private orderService : OrderService, private fb : FormBuilder) { }


  ngOnInit(): void {
    this.getOrders();
    this.addOrderForm = this.fb.group({
      orderName: '',
      price: '',
      isDiscounted : false
    })
    this.orderService.addOrderDone.subscribe(data => {
      if(data) {
        this.getOrders();
      }
    })
  }

  public getOrders() {
    this.orderService.getAllOrders().subscribe(data => {
      this.orders = data;
      console.log(data);
      console.log(this.orders);
    })
  }

  public placeOrder(){
    if(this.addOrderForm.valid) {
      this.orderService.addOrder(this.addOrderForm.value);
    }
  }

}
