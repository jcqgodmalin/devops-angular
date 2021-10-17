
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

  public getAllOrders() : Observable<Order[]> {
    return this.backendService.getAllOrders();
  }

  public addOrder(order : Order) {
    this.backendService.addOrder(order).subscribe(data => {
      this.addOrderDone.emit(true);
    })
  }


}
