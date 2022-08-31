import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    NavbarComponent,
    PostDetailComponent,
    EditPostComponent,
    AddUserComponent,
    UserListComponent,
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
