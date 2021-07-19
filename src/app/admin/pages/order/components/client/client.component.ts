import { IClient } from './../../../../../store/app.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'order-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  @Input() client: IClient;

  constructor() {}

  ngOnInit(): void {}
}
