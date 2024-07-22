import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
data: any;
  
  constructor(private http: HttpClient){}

  baseAPIUrl : string ='https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBSDdRDS-U9Z4mJIDc8DxRGuXCByXkeO34';
    
  input:string='';

  ngOnInit(): void {
    console.log("loading...");
    // this.getData().subscribe(
    //   res=>{
    //     console.log(res);
    //     console.log(res.candidates[0].content.parts[0].text);
        
    //   }
    // )
  }
  getAnswer(){
    this.getData().subscribe(
      res=>{
        this.data = res.candidates[0].content.parts[0].text
        console.log(this.data)
      }
    )
  }

  getData():Observable<any>{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
  
      const body = {
        contents: [
          {
            parts: [
              { text: this.input }
            ]
          }
        ]
      };
  
    return this.http.post<any>(this.baseAPIUrl,body,{headers});
  }

  title = 'AI-Gen-ChatBot';
}
