import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentView: 'home' | 'login' | 'team' = 'home';

  showLogin: boolean = false;
  showTeams: boolean = false;

toggleLogin(): void {
    this.currentView = this.currentView === 'login' ? 'home' : 'login';
    console.log("Login is clicked.");
  }

  toggleTeams(): void {
    this.currentView = this.currentView === 'team' ? 'home' : 'team';
    console.log("Team is clicked.");
  }
}
