import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {UserServiceService} from "../user-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users!: User[];

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServiceService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    })
  }
  deleteUser(user_to_delete : User) {
    this.userService.deleteUser(user_to_delete).subscribe({next: () => {
        this.users = this.users.filter((user) => user.id != user_to_delete.id)
      }});
  }

  sendId(user : User){
    const IdToSend = { id: user.id };
    this.router.navigate(['/updateuser', IdToSend]);
  }

}
