import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit{

  user: User = new User();
  constructor(private userService: UserServiceService) {
  }

  ngOnInit() {
  }

  userLogin(){
    console.log(this.user);
    this.userService.loginUser(this.user).subscribe(data=>{
      alert("Login successful");
    }, error => alert("Login failed"));
  }
}
