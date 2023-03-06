import { Component, OnInit } from '@angular/core';
import { adder } from '../utils/utils';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  largeNumberOnComp = 777;

  ngOnInit(): void {
    const str = 'Main commponent sts'
    console.log(str, adder())
    const largeNumInFuncConst = 678
    let largeNumInFuncLet = 578
  }

}
