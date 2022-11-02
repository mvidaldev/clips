import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modalID = '';

  //Elementref, para remover o conteudo do modal e isolar para evitar alterações do css

  constructor(public modal: ModalService, public el: ElementRef) {}

  ngOnInit(): void {
    //solicitando o desacoplamento do modal durante a inicialização do modulo.
    document.body.appendChild(this.el.nativeElement);
  }

  closeModal() {
    this.modal.toggleModal(this.modalID);
  }
}
