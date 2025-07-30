import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerGetDTO } from './customer-get-dto';
import { CustomerPostDTO } from './customer-post-dto';
import { CustomerPutDTO } from './customer-put-dto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/api/v1/customers';

  public findAll() : Observable<CustomerGetDTO[]> {
    return this.http.get<CustomerGetDTO[]>(this.apiUrl);
  }

  public findById(id: number) : Observable<CustomerGetDTO> {
    return this.http.get<CustomerGetDTO>(`${this.apiUrl}/${id}`);
  }

  public create(customer: CustomerPostDTO) : Observable<CustomerGetDTO> {
    return this.http.post<CustomerGetDTO>(this.apiUrl, customer);
  }

  public update(id: number, customer: CustomerPutDTO) : Observable<CustomerGetDTO> {
    return this.http.put<CustomerGetDTO>(`${this.apiUrl}/${id}`, customer);
  }

  public delete(id: number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}


