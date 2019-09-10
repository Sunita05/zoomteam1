import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocumentComponent } from './document.component';
import { DocumentRouting } from './document.routing';

@NgModule({
    imports: [
        CommonModule,
         FormsModule,
         NgbModule,
        DocumentRouting,

    ],
    declarations: [
        DocumentComponent
    ]
})
export class DocumentModule {}
