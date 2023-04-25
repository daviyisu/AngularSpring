import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceService} from "../user-service.service";
import {User} from "../user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  user: User;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServiceService) {
    this.user = new User();
  }

  onSubmit(){
    this.userService.addUser(this.user).subscribe(response => this.router.navigate((['/users'])));
  }
}
