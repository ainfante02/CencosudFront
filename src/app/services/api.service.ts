import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private REST_API_SERVER = environment.urlCity;

  constructor(private httpClient: HttpClient) {}

  public sendGetRequest(){
    return  this.httpClient.get(this.REST_API_SERVER)
    .pipe(

      // Response with 200
      map((res) => {
        // Check for data ok
        return res
        } ),
    )
    
}

}
