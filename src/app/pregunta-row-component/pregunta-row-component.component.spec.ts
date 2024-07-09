import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaRowComponentComponent } from './pregunta-row-component.component';

describe('PreguntaRowComponentComponent', () => {
  let component: PreguntaRowComponentComponent;
  let fixture: ComponentFixture<PreguntaRowComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreguntaRowComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreguntaRowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
