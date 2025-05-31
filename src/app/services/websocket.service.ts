import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket$: WebSocketSubject<any> | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Check if running in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.initializeWebSocket();
    }
  }

  private initializeWebSocket(): void {
    this.socket$ = webSocket({
      url: 'ws://localhost:8080',
      deserializer: (e: MessageEvent) => e.data,
    });
  }

  sendMessage(message: string): void {
    if (this.socket$) {
      this.socket$.next(message);
    } else {
      console.error('WebSocket is not initialized or available');
    }
  }

  getMessages(): Observable<string> {
    if (this.socket$) {
      return this.socket$;
    }
    console.error('WebSocket is not initialized');
    return of('');
  }

  closeConnection(): void {
    if (this.socket$) {
      this.socket$.complete();
    }
  }
}
