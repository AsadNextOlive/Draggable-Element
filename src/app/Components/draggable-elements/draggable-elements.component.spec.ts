import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableElementsComponent } from './draggable-elements.component';

describe('DraggableElementsComponent', () => {
  let component: DraggableElementsComponent;
  let fixture: ComponentFixture<DraggableElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DraggableElementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraggableElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
