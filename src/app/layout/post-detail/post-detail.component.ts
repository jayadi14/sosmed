import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { faBell, faComment, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private http: HttpClient, private route:ActivatedRoute) {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.comId = this.route.snapshot.paramMap.get('id');
    this.getPost()
    this.getComent()
   }

  fabell = faBell;
  falike = faThumbsUp;
  facoment = faComment;
  fashare = faShare;

  posts: any;
  com: any;
  postId?: string | null;
  comId?: string | null;

  getPost(){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/post/" + this.postId;
    this.http.get(url,requestOptions).subscribe((posts : any) => {
      this.posts = posts;
    });
  }

  getComent(){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/post/" + this.postId + "/comment";
    this.http.get(url,requestOptions).subscribe((com : any) => {
      this.com = com.data;
      console.log(com)
    });
  }

  ngOnInit(): void {
  }

}
