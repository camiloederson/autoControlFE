import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleBrandGetDTO } from './vehicle-brand-get-dto';
import { VehicleBrandPostDTO } from './vehicle-brand-post-dto';
import { VehicleBrandPutDTO } from './vehicle-brand-put-dto';

@Injectable({
  providedIn: 'root'
})
export class VehicleBrandService {
  private apiURL = "http://localhost:8080/api/v1/vehicleBrands"

  constructor(private http:HttpClient){
  }
    //findAll
    public findAll () : Observable<VehicleBrandGetDTO[]>{
      return this.http.get<VehicleBrandGetDTO[]>(this.apiURL);
    }

    // findById
    public findById(id : number) : Observable<VehicleBrandGetDTO>{
      return this.http.get<VehicleBrandGetDTO>(`${this.apiURL}/${id}`);
    }

    // save
    public save(vehicleBrand : VehicleBrandPostDTO) : Observable<VehicleBrandGetDTO>{
      return this.http.post<VehicleBrandGetDTO>(this.apiURL, vehicleBrand)
    }

    // update
    public update(id: number, vehicleBrand : VehicleBrandPutDTO) : Observable<VehicleBrandGetDTO>{
      return this.http.put<VehicleBrandGetDTO>(`${this.apiURL}/${id}`, vehicleBrand)
    }

    // delete
    public delete(id : number) : Observable<void>{
      return this.http.delete<void>(`${this.apiURL}/${id}`);
    }
}
