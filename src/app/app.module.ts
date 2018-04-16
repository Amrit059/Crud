import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { GetUserComponent } from './get-user/get-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UploadComponent } from './upload/upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { RegisterComponent } from './register/register/register.component';
import { LoadComponent } from './load/load.component';


const appRoutes: Routes = [
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'news-create',
    component: CreateUserComponent,
    data: { title: 'Create news' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  },
  {
    path: 'upload',
    component: UploadComponent,
    data: { title: 'Upload Image' }
  },
  {
    path: 'load',
    component:LoadComponent,
    data: { title: 'load Image' }
  },
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    GetUserComponent,
    CreateUserComponent,
    UploadComponent,
    RegisterComponent,
    LoadComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: true }),
    FormsModule,HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
