import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  serviceMessage! : string;
  showMessage : boolean = false;
  isError! : boolean;

  constructor(private orderService : OrderService) { }

  ngOnInit(): void {

    this.orderService.getOrderDone.subscribe(data =>{
      if(!data) {
        this.showMessage = true;
        this.isError = true;
        this.serviceMessage = "Cannot load details. Something went wrong";
      }
    })
    
    this.orderService.addOrderDone.subscribe(data => {
      if(data === true) {
        this.showMessage = true;
        this.isError = false;
        this.serviceMessage = "Order is successfully added.";
      }else{
        this.showMessage = true;
        this.isError = true;
        this.serviceMessage = "Unable to add order. Something went wrong";
      }
    })

    this.orderService.updateOrderDone.subscribe(data => {
      if(data === true) {
        this.showMessage = true;
        this.isError = false;
        this.serviceMessage = "Order is successfully updated.";
      }else{
        this.showMessage = true;
        this.isError = true;
        this.serviceMessage = "Unable to update order. Something went wrong";
      }
    })

    this.orderService.deleteOrderDone.subscribe(data => {
      if(data === true) {
        this.showMessage = true;
        this.isError = false;
        this.serviceMessage = "Order is successfully deleted.";
      }else{
        this.showMessage = true;
        this.isError = true;
        this.serviceMessage = "Unable to delete order. Something went wrong";
      }
    })

    this.orderService.totalRegularBill.subscribe(data => {
      if(data === false){
        this.showMessage = true;
        this.isError = true;
        this.serviceMessage = "Cannot load details. Something went wrong.";
      }
    })

    this.orderService.totalDiscountedBill.subscribe(data => {
      if(data === false){
        this.showMessage = true;
        this.isError = true;
        this.serviceMessage = "Cannot load details. Something went wrong.";
      }
    })

  }

  closeAlert() {
    this.serviceMessage = '';
    this.isError = false;
    this.showMessage = false;
  }

}
