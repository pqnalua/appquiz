import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicoPage } from './basico.page';

describe('BasicoPage', () => {
  let component: BasicoPage;
  let fixture: ComponentFixture<BasicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
