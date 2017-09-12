import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8011Component } from './my-comp-8011.component';

describe('MyComp8011Component', () => {
  let component: MyComp8011Component;
  let fixture: ComponentFixture<MyComp8011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
