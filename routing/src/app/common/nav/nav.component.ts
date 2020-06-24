import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  menuItems: {title: string, href: string}[] = [
    {title: 'Home', href: '/'},
    {title: 'Számlák', href: '/bills'},
    {title: 'Rólunk', href: '/about'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
