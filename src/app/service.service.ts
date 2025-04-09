import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface heading {
  id?: number;
  content: string;
}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  constructor(private http:HttpClient) { }


  private apiUrl = 'http://localhost:8080/api/heading';

  
  getHeading(): Observable<heading> {
    return this.http.get<heading>(this.apiUrl);
  }

  // POST a new heading to the backend
  updateHeading(content: string): Observable<heading> {
    return this.http.post<heading>(this.apiUrl, { content });
  }

}

