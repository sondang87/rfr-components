import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloatingButtonsPage } from './floating-buttons.page';

describe('FloatingButtonsPage', () => {
  let component: FloatingButtonsPage;
  let fixture: ComponentFixture<FloatingButtonsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingButtonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
