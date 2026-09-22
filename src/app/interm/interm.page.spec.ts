import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntermPage } from './interm.page';

describe('IntermPage', () => {
  let component: IntermPage;
  let fixture: ComponentFixture<IntermPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
