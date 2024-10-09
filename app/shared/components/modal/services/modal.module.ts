import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from "@angular/core";
import { ModalConfig } from "../interfaces/modal-config";
import { ModalComponent } from "../modal.component";



@Injectable()
export class ModalService {

  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    componentFactoryResolver : ComponentFactoryResolver,
    private injector : Injector
      ) {
        this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
      }

  public open(config: ModalConfig): ModalRef {
    const componetRef = this.createComponentRef();
    componetRef.instance.config = config;
    console.log(componetRef.instance);
    console.log('ipen called');
    return new ModalRef(componetRef);
  }

  private createComponentRef() : ComponentRef<ModalComponent>{
    return this.componentFactory.create(this.injector);
  }
}


export class ModalRef {

  constructor(private componetRef: ComponentRef<ModalComponent>){}
  public close(): void{
  console.log('close called');
  this.componetRef.destroy();
  }
}

