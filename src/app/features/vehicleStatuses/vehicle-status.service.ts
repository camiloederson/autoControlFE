import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleStatusGetDTO } from './vehicleStatus-get-dt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleStatusService {
  private apiUrl = 'http://localhost:8080/api/v1/vehicleStatuses';

  constructor(private http: HttpClient) {}

  public findAll(): Observable<VehicleStatusGetDTO[]> {
    return this.http.get<VehicleStatusGetDTO[]>(this.apiUrl);
  }

  public findById(id: number): Observable<VehicleStatusGetDTO> {
    return this.http.get<VehicleStatusGetDTO>(`${this.apiUrl}/${id}`);
  }
}
