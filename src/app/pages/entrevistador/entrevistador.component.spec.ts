import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistadorComponent } from './entrevistador.component';

describe('EntrevistadorComponent', () => {
  let component: EntrevistadorComponent;
  let fixture: ComponentFixture<EntrevistadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrevistadorComponent]
    });
    fixture = TestBed.createComponent(EntrevistadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
