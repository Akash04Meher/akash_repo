import { Component } from '@angular/core';

@Component({
  selector: 'app-team9',
  templateUrl: './team9.component.html',
  styleUrls: ['./team9.component.css']
})
export class Team9Component {
  contactsMap: { [key: number]: { name: string; image: string; phoneNumber: string } } = {
    1: { name: 'Sudhakar', image: '', phoneNumber: '7735486698' },
    2: { name: 'Manish', image: '', phoneNumber: '8340778990' },
    3: { name: 'Ajaya', image: '', phoneNumber: '8917628020' },
    4: { name: 'Siba', image: '', phoneNumber: '1234567890' },
    5: { name: 'Sambit', image: 'assets/images/Sambit.jpg', phoneNumber: '8328996317' },
    6: { name: 'Bhabani', image: '', phoneNumber: '8112098208' }
  };
}
