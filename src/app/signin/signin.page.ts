import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(private userService: UserService) { 
    userService.getUserById(4).subscribe({
      next: (data) => {
        console.log('Response:', data); // Debugging response.
        prompt(JSON.stringify(data)); // Convert object to a string for the prompt.
      },
      error: (err) => {
        console.error('Error:', err); // Log any errors.
      },
    });
  }

  ngOnInit() {
  }

  checkUser() {
    
  }

}
