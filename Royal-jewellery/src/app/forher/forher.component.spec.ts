import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForherComponent } from './forher.component';

describe('ForherComponent', () => {
  let component: ForherComponent;
  let fixture: ComponentFixture<ForherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
