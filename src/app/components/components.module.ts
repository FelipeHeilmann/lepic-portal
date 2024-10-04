import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SharedModule } from "../shared/shared.module";
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from "@angular/router";

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, NavbarComponent],
  imports: [SharedModule, RouterOutlet],
  exports: [LayoutComponent, SidebarComponent, NavbarComponent]
})

export class ComponentsModule {}
