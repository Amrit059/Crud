import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { variable } from '@angular/compiler/src/output/output_ast';
import { FileUploader,FileSelectDirective } from 'ng2-file-upload';


const uri="http://localhost:3000/file/upload";//const url for file upload

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
 
//upload: FileUploader = new FileUploader({url:uri});
//Flist:any=[];


Deafult_Img:String='/assets/img/noimage.png';
  SFile:File=null;

  hanndleFile(file:FileList){
    this.SFile=file.item(0);  
   //show preview
  var red= new FileReader();
  red.onload=(event:any)=>{
    this.Deafult_Img=event.target.result; }
   red.readAsDataURL(this.SFile);
   }
   file(event){
    this.SFile=event.target.files[0]; 
   }
 
constructor(private http:HttpClient) {
 //this.upload.onCompleteItem = (item:any,response:any,status:any,headers:any)=>{
  //  this.SFile.push(JSON.parse(response));  }
}
upload(){ 
 console.log(event)// 
  const  fd=new FormData()// 
   fd.append('image',this.SFile,this.SFile.name)// 
 this.http.post('https//localhost/4200/upload',fd)
  .subscribe(event=>
  {
    console.log(event)
 })
}
  ngOnInit() {
  }

}
//its not working 