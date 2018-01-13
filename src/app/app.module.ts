import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HoodpubService } from './hoodpub.service';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
        HttpClientModule
    ],
    providers: [
        HoodpubService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
