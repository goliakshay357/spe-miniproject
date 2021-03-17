import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { 
    let data ={
      "function_type": "square_root"
   }
    this.elkStackData(data);
    console.log("ELK PUSHED");
    
  }

  async elkStackData(data_stream:any) {
    const body = data_stream;
    await this.http.post('http://13.233.49.147:9200/calcualtor_functions/_doc/', body).toPromise()
      .then((response) => {
        console.log(response);
      });
  }
}
