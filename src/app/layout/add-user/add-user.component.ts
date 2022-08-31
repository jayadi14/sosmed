import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  isSubmitAllow =true;
  alert:boolean=false;
  eror:boolean=false;

  constructor(private http: HttpClient) { }

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    picture: new FormControl('')
  });

  onSubmit(){
    this.isSubmitAllow = false;
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/user/create";
    this.http.post(url,this.profileForm.value,requestOptions).subscribe(()=>{
      this.isSubmitAllow = true;
      this.profileForm.get('firstName')?.reset()
      this.profileForm.get('lastName')?.reset()
      this.profileForm.get('email')?.reset()
      this.profileForm.get('picture')?.reset()
      this.alert=true
    },err => {
      this.eror=true
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
