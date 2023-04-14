import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireService } from 'src/app/srv/fire.service';

@Component({
  selector: 'app-curtidas',
  templateUrl: './curtidas.component.html',
  styleUrls: ['./curtidas.component.scss']
})
export class CurtidasComponent implements OnInit {

  constructor(private fire: FireService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.fire.logout();
    this.router.navigate(['/login']);
  }

}
