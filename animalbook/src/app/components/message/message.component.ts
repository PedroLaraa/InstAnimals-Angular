import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  mensagem = 'Mensagem de erro';

  constructor() { }

  ngOnInit(): void {
  }

}
