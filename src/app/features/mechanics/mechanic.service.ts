import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MechanicGetDTO } from './mechanic-get-dto';
import { MechanicPostDTO } from './mechanic-post-dto';
import { MechanicPutDTO } from './mechanic-put-dto';

@Injectable({
  providedIn: 'root'
})
export class MechanicService {

  private apiUrl = 'http://localhost:8080/api/v1/mechanics';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<MechanicGetDTO[]> {
    return this.http.get<MechanicGetDTO[]>(this.apiUrl);
  }

  public findById(id: number): Observable<MechanicGetDTO> {
    return this.http.get<MechanicGetDTO>(`${this.apiUrl}/${id}`);
  }

  public create(mechanic: MechanicPostDTO): Observable<MechanicGetDTO> {
    return this.http.post<MechanicGetDTO>(this.apiUrl, mechanic);
  }

  public update(id: number, mechanic: MechanicPutDTO): Observable<MechanicGetDTO> {
    return this.http.put<MechanicGetDTO>(`${this.apiUrl}/${id}`, mechanic);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
