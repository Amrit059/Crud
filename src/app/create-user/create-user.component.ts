import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

   user:any={};
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  saveNews() {
    this.http.post('/user', this.user)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/create-user', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
