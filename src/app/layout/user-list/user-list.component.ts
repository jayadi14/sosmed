import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  posts: any;
  alert:boolean=false;
  eror:boolean=false;

  constructor(private http: HttpClient, private route:ActivatedRoute) {
    this.getData()
   }

  getData(){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/user?created=1";
    this.http.get(url,requestOptions).subscribe((posts : any) => {
      this.posts = posts.data;
    });
  }

  delete(id:string){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/user/" + id;
    this.http.delete(url,requestOptions).subscribe(()=>{
      this.getData()
      this.alert=true
    },err => {
      this.eror=true
    })
  }

  closeAlert(){
    this.alert=false
  }

  closeEror(){
    this.eror=false;
  }

  ngOnInit(): void {
  }

}
