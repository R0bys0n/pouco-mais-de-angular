import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from "@angular/core";
import { ModalConfig } from "../interfaces/modal-config";
import { ModalComponent } from "../modal.component";
import { BodyInjectorService } from "src/app/shared/services/body-injector";
import { ModalRef } from "../models/modal-ref";


@Injectable()
export class ModalService {

  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    componentFactoryResolver : ComponentFactoryResolver,
    private injector : Injector,
    private bodyInjectable : BodyInjectorService
      ) {
        this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
      }

  public open(config: ModalConfig): ModalRef {
    const componetRef = this.createComponentRef();
    componetRef.instance.config = config;
    console.log(config)
    console.log('open called');
    this.bodyInjectable.stackBeforeAppRoot(componetRef);
    const modalRef =  new ModalRef(componetRef);
    componetRef.instance.modalRef = modalRef;
    return modalRef;
  }

  private createComponentRef() : ComponentRef<ModalComponent>{
    return this.componentFactory.create(this.injector);
  }
}





