import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "../../shared/shared.module";
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
    declarations: [DashboardComponent],
    imports: [SharedModule, NgApexchartsModule],
    exports: [DashboardComponent]
})

export class DashboardModule {}