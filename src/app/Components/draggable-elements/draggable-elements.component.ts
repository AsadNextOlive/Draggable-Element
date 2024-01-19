import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-draggable-elements',
  templateUrl: './draggable-elements.component.html',
  styleUrl: './draggable-elements.component.css'
})
export class DraggableElementsComponent {
  onDrop(event: CdkDragDrop<any[]>) {
    console.log('Touched')
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }
}
