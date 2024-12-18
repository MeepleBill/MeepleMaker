import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { LobbyService } from '../lobby.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(private userService: UserService, private lobbyService: LobbyService) { 
    lobbyService.listen("anwser").subscribe({
      next: (data) => {
        console.log('Response:', data); // Debugging response.
      },
      error: (err) => {
        console.error('Error:', err); // Log any errors.
      },
    });
    userService.getUserById(4).subscribe({
      next: (data) => {
        console.log('Response:', data); // Debugging response.
      },
      error: (err) => {
        console.error('Error:', err); // Log any errors.
      },
    });

    prompt('0')

    let data = lobbyService.emit('createLobby', 'blabla')

    console.log(data)
    console.log("0")

    

    data = lobbyService.emit('createLobby', 'blabla')
    console.log('2')

  }

  ngOnInit() {
  }

  checkUser() {
    
  }

}
