import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-com',
  templateUrl: './com.component.html',
  styleUrls: ['./com.component.css']
})
export class ComComponent {
  @Input() commenti : string;


}
