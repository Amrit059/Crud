import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  SFile:File=null;
  file(event){
    this.SFile=<File>event.target.files[0]; 
}
  constructor(private http:HttpClient) { }
  upload(){ 
    const  fd=new FormData()
    fd.append('image',this.SFile,this.SFile.name)
   this.http.post('https//localhost/4200/book',fd)
   .subscribe(event=>
   {console.log(event)
   })}
  ngOnInit() {
  }

}
//its not working 