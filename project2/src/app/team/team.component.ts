import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})

export class TeamComponent {
  teamlist = [
    { name: 'Team 1', key: 'TEAM 1' },
    { name: 'Team 2', key: 'TEAM 2' },
    { name: 'Team 3', key: 'TEAM 3' },
    { name: 'Team 4', key: 'TEAM 4' },
    { name: 'Team 5', key: 'TEAM 5' },
    { name: 'Team 6', key: 'TEAM 6' },
    { name: 'Team 7', key: 'TEAM 7' },
    { name: 'Team 8', key: 'TEAM 8' },
    { name: 'Team 9', key: 'TEAM 9' },
    { name: 'Team 10', key: 'TEAM 10' }
  ];

  selectedTeam: string | null = null;

  showTeam(teamKey: string): void {
    this.selectedTeam = teamKey;
  }

  clearSelection(): void {
    this.selectedTeam = null;
  }

}
