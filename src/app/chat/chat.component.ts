import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  imports:[CommonModule,FormsModule],
  standalone:true
})
export class ChatComponent {
  messages: { sender: string; content: string; timestamp: string }[] = [];
  userMessage: string = '';
  chatVisible: boolean = false;

  toggleChat() {
    this.chatVisible = !this.chatVisible;
  }

  sendMessage() {
    if (this.userMessage.trim()) {
      const message = {
        sender: 'User',
        content: this.userMessage,
        timestamp: new Date().toLocaleTimeString() // Current time as timestamp
      };
      this.messages.push(message);

      // Clear the input field
      this.userMessage = '';

      // Simulate bot response
      setTimeout(() => {
        const botMessage = {
          sender: 'Bot',
          content: 'I am here to help!',
          timestamp: new Date().toLocaleTimeString()
        };
        this.messages.push(botMessage);
      }, 1000);
    }
  }
}
