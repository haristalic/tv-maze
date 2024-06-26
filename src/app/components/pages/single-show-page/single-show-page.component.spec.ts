import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShowPageComponent } from './single-show-page.component';

describe('SingleShowPageComponent', () => {
  let component: SingleShowPageComponent;
  let fixture: ComponentFixture<SingleShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleShowPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
