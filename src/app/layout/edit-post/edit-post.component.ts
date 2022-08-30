import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private http: HttpClient, private route:ActivatedRoute) {
    this.blogId = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  posts:any;
  up:any;
  blogId?: string | null;

  updateForm = new FormGroup({
    text: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    owner: new FormControl('630743a757aed83e137c2bd2', Validators.required)
  });

  getData(){
      const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
      const requestOptions = { headers: headers };
      let url="https://dummyapi.io/data/v1/post/" + this.blogId;
      this.http.get(url,requestOptions).subscribe((posts : any) => {
        this.posts = posts;
        this.updateForm = new FormGroup({
          text: new FormControl(posts.text),
          image: new FormControl(posts.image),
          owner: new FormControl(posts.owner)
        });
      });
    }

  update(){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/post/" + this.blogId;
    this.http.put(url,this.updateForm.value,requestOptions).subscribe((up : any) => {
      window.location.reload()
    });
  }

  ngOnInit(): void {
  }

}
