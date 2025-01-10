import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private baseUrl = 'https://api.tuproyecto.com/v1';

  constructor(private http: HttpClient) {}

  createPayment(data: { amount: number; paymentMethod: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/payments`, data);
  }
}

