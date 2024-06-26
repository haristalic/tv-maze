import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSearchPageComponent } from './show-search-page.component';

describe('ShowSearchPageComponent', () => {
  let component: ShowSearchPageComponent;
  let fixture: ComponentFixture<ShowSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSearchPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
