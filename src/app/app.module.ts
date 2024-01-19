import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './Components/main-component/main-component.component';
import { DraggableElementsComponent } from './Components/draggable-elements/draggable-elements.component';
import { CdkDrag, DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    DraggableElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    CdkDrag
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
