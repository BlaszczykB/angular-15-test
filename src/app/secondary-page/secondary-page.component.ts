import { Component, OnInit } from '@angular/core';
import { adder } from '../utils/utils';

@Component({
  selector: 'app-secondary-page',
  templateUrl: './secondary-page.component.html',
  styleUrls: ['./secondary-page.component.scss']
})
export class SecondaryPageComponent implements OnInit {
  ngOnInit(): void {
    const str = 'Secondary commponent sts'
    console.log(str, adder())
  }
}
