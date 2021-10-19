
import { HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders! : Order[];

  totalRegularBill = new EventEmitter<any>();
  totalDiscountedBill = new EventEmitter<any>();
  clerkName = new EventEmitter<any>();
  getOrderDone = new EventEmitter<boolean>();
  addOrderDone = new EventEmitter<boolean>();
  deleteOrderDone = new EventEmitter<boolean>();
  updateOrderDone = new EventEmitter<boolean>();

  constructor(private backendService : BackendService) { }

  public getAllOrders() : Observable<Order[]> {
    return this.backendService.getAllOrders();
  }

  public addOrder(order : Order) {
    this.backendService.addOrder(order).subscribe(data => {
      this.addOrderDone.emit(true);
    }, (error: HttpErrorResponse) => {
      this.addOrderDone.emit(false);
    })
  }

  public updateOrder(order : Order) {
    this.backendService.updateOrder(order).subscribe(data => {
      this.updateOrderDone.emit(true);
    }, (error: HttpErrorResponse) => {
      this.updateOrderDone.emit(false);
    })
  }

  public deleteOrder(id : number) {
    this.backendService.deleteOrder(id).subscribe(data => {
      this.deleteOrderDone.emit(true);
    }, (error: HttpErrorResponse) => {
      this.deleteOrderDone.emit(false);
    })
  }

  public getRegularBill() {
    this.backendService.getTotalRegularBilling().subscribe(data => {
      this.totalRegularBill.emit(data.totalBill);
    }, (error: HttpErrorResponse) => {
      this.totalRegularBill.emit(false);
    })
  }

  public getDiscountedBill() {
    this.backendService.getTotalDiscountedBilling().subscribe(data => {
      this.totalDiscountedBill.emit(data.totalBill);
    }, (error: HttpErrorResponse) => {
      this.totalDiscountedBill.emit(false);
    })
  }

  public getClerkName() {
    this.backendService.getTotalRegularBilling().subscribe(data => {
      this.clerkName.emit(data.clerk.name);
    }, (error: HttpErrorResponse) => {
      this.clerkName.emit(false);
    })
  }

}
