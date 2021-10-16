import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient : HttpClient) { }

  apiUrl : String = "../KopeeteariaAPI/api";
  apiEndpoint : String = `${this.apiUrl}/orders`;

  /*
  
    Get all orders
  
  */
  public getAllOrders() : Observable<Order[]> {

    return this.httpClient.get<Order[]>(`${this.apiEndpoint}`);

  }

  /*

    Add Order

  */
  public addOrder(order : Order) : Observable<void> {

    return this.httpClient.post<void>(`${this.apiEndpoint}`, order);

  }

  /*

    Update Order

  */
  public updateOrder(order : Order) : Observable<void> {

    return this.httpClient.put<void>(`${this.apiEndpoint}`, order);

  }

  /*

    Delete Order

  */
  public deleteOrder(id : number) : Observable<void> {

    return this.httpClient.delete<void>(`${this.apiEndpoint}/${id}`);

  }

}
