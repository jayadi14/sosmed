import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { faBell, faComment, faRightToBracket, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private http: HttpClient, private route:ActivatedRoute) {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.addcomForm.patchValue({post: this.postId})
    this.getPost()
    this.getComent()
   }

   addcomForm = new FormGroup({
    message: new FormControl('', Validators.required),
    owner: new FormControl('630743a757aed83e137c2bd2'),
    post: new FormControl('', Validators.required),
  });



  fabell = faBell;
  falike = faThumbsUp;
  facoment = faComment;
  fashare = faShare;
  faenter = faRightToBracket;

  posts: any;
  com: any;
  postId?: string | null;
  isSubmitAllow =true;

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
    });
  }

  addCom(){
    this.isSubmitAllow = false;
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/comment/create";
    this.http.post(url,this.addcomForm.value,requestOptions).subscribe(() => {
    this.isSubmitAllow = true;
      this.getComent()
      this.addcomForm.get('message')?.reset()
    },err=>{
    this.isSubmitAllow = true;
    });
  }

  delete(id:string){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/comment/" + id;
    this.http.delete(url,requestOptions).subscribe(()=>{
      this.getComent()
    })
  }

  addLike(){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/post/" + this.postId;
    this.posts.likes = Number(this.posts.likes) + 1
    this.http.put(url,this.posts,requestOptions).subscribe((result:any) => {
      this.posts = result
      this.getComent()
    });
  }




  ngOnInit(): void {
  }

}
