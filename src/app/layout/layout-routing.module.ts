import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        component:HomeComponent,
      },
    { path:'postDetail/:id', component:PostDetailComponent },
    { path:'editPost/:id', component:EditPostComponent },
    { path:'addUser', component:AddUserComponent },
    { path:'userList', component:UserListComponent },
    { path:'userUpdate/:id', component:UserUpdateComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
