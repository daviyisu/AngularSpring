import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceService} from "../user-service.service";
@Component({
  selector: 'app-user-update-form',
  templateUrl: './user-update-form.component.html',
  styleUrls: ['./user-update-form.component.scss']
})
export class UserUpdateFormComponent implements OnInit {
  user: User;
  id: String | undefined;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServiceService) {
    this.user = new User();
  }

  ngOnInit(){
    // @ts-ignore
    this.id = this.route.snapshot.paramMap.get('id');
  }

  onSubmit(){
    this.userService.updateUser(this.user, this.id).subscribe(response => this.router.navigate((['/users'])));
  }
}
