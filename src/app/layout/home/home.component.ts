import { Component, OnInit } from '@angular/core';
import { faBell, faComment, faImage, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: any;
  com: any;
  sub:any;

  showMenu = false;
  fabell = faBell;
  falike = faThumbsUp;
  facoment = faComment;
  fashare = faShare;
  faimg = faImage;

  constructor(private http: HttpClient, private route:ActivatedRoute) {
    this.getData()
  }

  profileForm = new FormGroup({
    text: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    owner: new FormControl('630743a757aed83e137c2bd2', Validators.required)
  });

  onSubmit(){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/post/create";
    this.http.post(url,this.profileForm.value,requestOptions).subscribe (() =>{
      window.location.reload()
    });
  }

  getData(){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/post";
    this.http.get(url,requestOptions).subscribe((posts : any) => {
      this.posts = posts.data;
    });
  }

  delete(id:string){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/post/" + id;
    this.http.delete(url,requestOptions).subscribe(()=>{
      this.getData()
      window.location.reload()
    })
  }



  ngOnInit(): void {
  }

}
