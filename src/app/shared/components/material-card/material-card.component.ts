import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.scss'],
})
export class MaterialCardComponent implements OnInit {
  @Input() artist: string = '';
  @Input() imageName: string = '';
  @Input() imageDesc: string = '';
  @Input() imageUrl: string = '';
  constructor() {}

  ngOnInit(): void {}
}
