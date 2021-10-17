import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient : HttpClient) { }

  /**
   * 
   * ORDERS
   */

  /*
  
    Get all orders
  
  */
  public getAllOrders() : Observable<Order[]> {

    return this.httpClient.get<Order[]>(`${environment.api_url}`);

  }

  /*

    Add Order

  */
  public addOrder(order : Order) : Observable<void> {

    return this.httpClient.post<void>(`${environment.api_url}`, order);

  }

  /*

    Update Order

  */
  public updateOrder(order : Order) : Observable<void> {

    return this.httpClient.put<void>(`${environment.api_url}`, order);

  }

  /*

    Delete Order

  */
  public deleteOrder(id : number) : Observable<void> {

    return this.httpClient.delete<void>(`${environment.api_url}/${id}`);

  }



}
