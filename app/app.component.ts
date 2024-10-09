import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from './shared/components/modal/services/modal.service';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fade } from './shared/animations/fade';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
export class AppComponent implements OnInit{
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p2';
  public firstName = 'Robyson';
  public modalRef: ModalRef;
  public info = false;
  public  form : FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ){}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['Robyson', Validators.required],
      surname: ['', Validators.required],
      age: ['',  Validators.required],
      info:[false]
    });
  }

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });

  }

  public submit(): void{
    if(this.form.invalid){
      return;
    }
    console.log(this.form.value);
    this.modalRef.close();
  }
}