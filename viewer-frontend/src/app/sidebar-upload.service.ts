import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarUploadService {
    // API url
    baseApiUrl = "http://localhost:8080/api/send"
    
    constructor(private http:HttpClient) { }
    
    // Returns an observable
    upload(file: any):Observable<any> {
    
        // Create form data
        const formData = new FormData(); 
          
        // Store form name as "file" with file data
        formData.append("file", file, file.name);
          
        // Make http post request over api
        // with formData as req
        return this.http.post(this.baseApiUrl, formData)
    }
}
