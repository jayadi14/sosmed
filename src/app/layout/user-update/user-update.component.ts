import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  alert:boolean=false;
  eror:boolean=false;
  posts:any;
  blogId?: string | null;
  isSubmitAllow =true;

  updateForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    picture: new FormControl('')
  });

  constructor(private http: HttpClient, private route:ActivatedRoute) {
    this.blogId = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData(){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/user/" + this.blogId;
    this.http.get(url,requestOptions).subscribe((posts : any) => {
      this.posts = posts;
      this.updateForm = new FormGroup({
        firstName: new FormControl(posts.firstName),
        lastName: new FormControl(posts.lastName),
        picture: new FormControl(posts.picture)
      });
    });
  }

  update(){
    this.isSubmitAllow = false;
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/user/" + this.blogId;
    this.http.put(url,this.updateForm.value,requestOptions).subscribe(() => {
    this.isSubmitAllow = true;
      this.getData()
    this.alert=true
    },err => {
      this.eror=true;
      this.isSubmitAllow = true;
    });
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
