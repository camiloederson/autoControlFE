import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleGetDTO } from './vehicle-get-dto';
import { Observable } from 'rxjs';
import { VehiclePostDTO } from './vehicle-post-dto';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'http://localhost:8080/api/v1/vehicles';

constructor(private http : HttpClient){}

// findAll
public findAll() : Observable<VehicleGetDTO[]>{
  return this.http.get<VehicleGetDTO[]>(this.apiUrl);
}

// findById
public findById(id : number) : Observable<VehicleGetDTO>{
  return this.http.get<VehicleGetDTO>(`${this.apiUrl}/${id}`);
}

// save
public save(vehicle : VehiclePostDTO): Observable<VehicleGetDTO>{
  return this.http.post<VehicleGetDTO>(this.apiUrl, vehicle);
}


// update
public update(id : number, vehicle : VehiclePostDTO) : Observable<VehicleGetDTO>{
  return this.http.put<VehicleGetDTO>(`${this.apiUrl}/${id}`, vehicle);
}

// delete
public delete(id : number) : Observable<void>{
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
}
