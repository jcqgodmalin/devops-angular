import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clerkName! : String;

  addOrderForm! : FormGroup;
  updateOrderForm! : FormGroup;

  orders!: Order[];

  totalRegularBill : number = 0.0;
  totalDiscountedBill : number = 0.0;

  forUpdate : boolean = false;

  addOrderError : boolean = false;
  updateOrderError : boolean = false;

  isServerHasProblem : boolean = false;

  constructor(private orderService : OrderService, private fb : FormBuilder) { }


  ngOnInit(): void {

    this.getOrders();

    this.addOrderForm = this.fb.group({
      orderName: ['',Validators.required],
      price: ['',Validators.required],
      isDiscounted : false
    });

    this.updateOrderForm = this.fb.group({
      id: '',
      orderName: ['',Validators.required],
      price: ['',Validators.required],
      isDiscounted: '',
      discountedPrice : ''
    });

    //subscribe to events
    this.orderService.addOrderDone.subscribe(data => {
      if(data) {
        this.getOrders();
        this.clearAddForm();
      }
    })

    this.orderService.updateOrderDone.subscribe(data => {
      if(data) {
        this.getOrders();
        this.clearUpdateForm();
      }
    })

    this.orderService.deleteOrderDone.subscribe(data => {
      if(data) {
        this.getOrders();
        this.clearUpdateForm();
      }
    })

    this.orderService.totalRegularBill.subscribe(data => {
      if(data !== false){
        this.totalRegularBill = data;
      }
    })

    this.orderService.totalDiscountedBill.subscribe(data => {
      if(data !== false){
        this.totalDiscountedBill = data;
      }
    })

    this.orderService.clerkName.subscribe(data => {
      if(data !== false) {
        this.clerkName = data;
      }
    })
  }


  public clearAddForm() {
    this.addOrderForm.controls['orderName'].setValue("");
    this.addOrderForm.controls['price'].setValue("");
    this.addOrderForm.controls['isDiscounted'].setValue("");
    this.addOrderError = false;
  }

  public clearUpdateForm() {
    this.updateOrderForm.controls['orderName'].setValue("");
    this.updateOrderForm.controls['price'].setValue("");
    this.updateOrderForm.controls['isDiscounted'].setValue("");
    this.forUpdate = false;
    this.updateOrderError = false;
  }


  public getOrders() {
    this.orderService.getAllOrders().subscribe(data => {
      this.orders = data;
      this.isServerHasProblem = true;
      this.orderService.getRegularBill();
      this.orderService.getDiscountedBill();
      this.orderService.getClerkName();
    },
    (error: HttpErrorResponse) => {
      this.orderService.getOrderDone.emit(false);
      this.isServerHasProblem = true;
    }
    )
    
  }

  public placeOrder(){
    if(this.addOrderForm.valid) {
      this.orderService.addOrder(this.addOrderForm.value);
    }else{
      this.addOrderError = true;
    }
  }

  public onClickUpdate(order : Order) {
    this.forUpdate = true;
    this.updateOrderForm.controls['id'].setValue(order.id);
    this.updateOrderForm.controls['orderName'].setValue(order.orderName);
    this.updateOrderForm.controls['price'].setValue(order.price);
    this.updateOrderForm.controls['isDiscounted'].setValue(order.discounted);
    this.updateOrderForm.controls['discountedPrice'].setValue(order.discountedPrice);
  }

  public updateOrder() {
    if(this.updateOrderForm.valid) {
      this.orderService.updateOrder(this.updateOrderForm.value);
    }else{
      this.updateOrderError = true;
    }
  }


  public deleteOrder(id : number) {
    this.orderService.deleteOrder(id);
  }

}
