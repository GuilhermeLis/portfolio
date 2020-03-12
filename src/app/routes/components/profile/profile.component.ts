import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  description = ' Eu sou Guilherme Lisboa formada em Bacharelado em Ciência e Tecnologia e ' +
                        ' Engenharia da Computação ';

  constructor() { }

  ngOnInit(): void {
  }

}
