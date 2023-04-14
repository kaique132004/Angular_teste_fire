import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { FireService } from 'src/app/srv/fire.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(private afs: AngularFireAuth, private router: Router, private fire: FireService) {
    if (localStorage.getItem('user') == null) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    let searchBtn = document.querySelector(".bx-search");

    closeBtn!.addEventListener("click", () => {
      sidebar!.classList.toggle("open");
      menuBtnChange();//calling the function(optional)
    });

    searchBtn!.addEventListener("click", () => { // Sidebar open when you click on the search iocn
      sidebar!.classList.toggle("open");
      menuBtnChange(); //calling the function(optional)
    });

    // following are the code to change sidebar button(optional)
    function menuBtnChange() {
      if (sidebar!.classList.contains("open")) {
        closeBtn!.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
      } else {
        closeBtn!.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
      }
    }

  }

  logout() {
    this.fire.logout();
    this.router.navigate(['/login']);
  }

}
