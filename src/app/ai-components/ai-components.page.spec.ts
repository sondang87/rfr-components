import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AiComponentsPage } from './ai-components.page';

describe('AiComponentsPage', () => {
  let component: AiComponentsPage;
  let fixture: ComponentFixture<AiComponentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AiComponentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
