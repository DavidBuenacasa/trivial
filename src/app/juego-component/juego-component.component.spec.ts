import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoComponentComponent } from './juego-component.component';

describe('JuegoComponentComponent', () => {
  let component: JuegoComponentComponent;
  let fixture: ComponentFixture<JuegoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuegoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuegoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
