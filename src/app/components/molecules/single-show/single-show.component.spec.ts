import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShowComponent } from './single-show.component';

describe('SingleShowComponent', () => {
  let component: SingleShowComponent;
  let fixture: ComponentFixture<SingleShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
