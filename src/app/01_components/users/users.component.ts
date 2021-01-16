import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [
    { name: 'Amit', username: 'Amit123', email: 'amit@gmail.com' },
    { name: 'Amit', username: 'Amit123', email: 'amit@gmail.com' },
    { name: 'Amit', username: 'Amit123', email: 'amit@gmail.com' },
    { name: 'Amit', username: 'Amit123', email: 'amit@gmail.com' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
