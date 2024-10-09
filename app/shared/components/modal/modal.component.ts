import { fade } from '../../animations/fade';
import { ModalConfig } from './interfaces/modal-config';
import { Component } from "@angular/core";
import { ModalRef } from './models/modal-ref';



@Component({
  selector: 'app-modeal',
  templateUrl: './modal.component.html',
  styleUrls: ['modal.component.scss'],
  animations: [fade]
})

export class ModalComponent{
  public config: ModalConfig;
  public modalRef: ModalRef;
}
