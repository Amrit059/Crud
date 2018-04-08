import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {

  book = {};

  constructor(private http: HttpClient, private router: Router) { }
  
  SFile:File=null;
  file(event){
    this.SFile=<File>event.target.files[0]; 
 }
  ngOnInit() {
  }
  
  upload(){ 
    const  fd=new FormData()
    fd.append('image',this.SFile,this.SFile.name)
   this.http.post('https//localhost/4200/book',fd)
   .subscribe(event=>
   {console.log(event)
   })}

  saveBook() {
  
    this.http.post('/book',this.book)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}