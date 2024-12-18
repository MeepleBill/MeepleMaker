import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  emit(event: string, data: any): void {
    this.socket.emit(event, data);
  }

  listen<T>(event: string): Observable<T> {
    return new Observable((subscriber) => {
      // Log when the listener is set up
      console.log(`Listening for event: ${event}`);
      
      // Listen for the event and capture the data
      this.socket.on(event, (data: T) => {
        console.log(`Event '${event}' received with data:`, data); // Log received data
        subscriber.next(data);
      });
  
      // Cleanup on unsubscribe
      return () => {
        console.log(`Unsubscribed from event: ${event}`);
        this.socket.off(event);
      };
    });
  }
}
