import { NgModule } from "@angular/core";
import { PendencyComponent } from "./pendency.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [PendencyComponent],
    imports: [SharedModule],
})

export class PendencyModule {}