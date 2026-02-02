import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Valid } from './valid';

describe('Valid', () => {
  let component: Valid;
  let fixture: ComponentFixture<Valid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Valid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Valid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
