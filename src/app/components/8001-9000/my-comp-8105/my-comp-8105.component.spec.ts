import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8105Component } from './my-comp-8105.component';

describe('MyComp8105Component', () => {
  let component: MyComp8105Component;
  let fixture: ComponentFixture<MyComp8105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
