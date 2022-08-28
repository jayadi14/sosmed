import { Component, OnInit } from '@angular/core';
import { faBell, faComment, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: any;
  com: any;

  fabell = faBell;
  falike = faThumbsUp;
  facoment = faComment;
  fashare = faShare;

  constructor(private http: HttpClient, private route:ActivatedRoute) {
    this.getData()
    this.getComent()
  }

  getData(){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/post";
    this.http.get(url,requestOptions).subscribe((posts : any) => {
      this.posts = posts.data;
    });
  }

  getComent(){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/comment";
    this.http.get(url,requestOptions).subscribe((com : any) => {
      this.com = com.data;
    });
  }

  ngOnInit(): void {
  }

}
