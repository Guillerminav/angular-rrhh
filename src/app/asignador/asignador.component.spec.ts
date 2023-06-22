import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignadorComponent } from './asignador.component';

describe('AsignadorComponent', () => {
  let component: AsignadorComponent;
  let fixture: ComponentFixture<AsignadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignadorComponent]
    });
    fixture = TestBed.createComponent(AsignadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
