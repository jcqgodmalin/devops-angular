
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders! : Order[];

  addOrderDone = new EventEmitter<boolean>();

  constructor(private backendService : BackendService) { }

  public getAllOrders() : Order[] {
    this.backendService.getAllOrders().subscribe(data => {
      this.orders = data;
    });
    return this.orders;
  }

  public addOrder(order : Order) {
    this.backendService.addOrder(order).subscribe(data => {
      this.addOrderDone.emit(true);
    })
  }


}
