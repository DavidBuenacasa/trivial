import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCatComponentComponent } from './modificar-cat-component.component';

describe('ModificarCatComponentComponent', () => {
  let component: ModificarCatComponentComponent;
  let fixture: ComponentFixture<ModificarCatComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarCatComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarCatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
