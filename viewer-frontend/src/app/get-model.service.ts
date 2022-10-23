import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetModelService {
  public url = 'http://localhost:8080/api/retrieve/';
  constructor(private http: HttpClient) { }
  public getFile(model_name) : Observable<any>{
    return this.http.get<any>(this.url+model_name);
  }
}
