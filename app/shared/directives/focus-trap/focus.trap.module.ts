import { NgModule } from "@angular/core";
import { FocusTrapDirecitve } from "./focus-trap.directive";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations : [FocusTrapDirecitve],
  imports : [CommonModule],
  exports: [FocusTrapDirecitve]
})
export class FocusTrapModule {}
