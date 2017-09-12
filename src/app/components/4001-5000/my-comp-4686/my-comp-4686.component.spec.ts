import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4686Component } from './my-comp-4686.component';

describe('MyComp4686Component', () => {
  let component: MyComp4686Component;
  let fixture: ComponentFixture<MyComp4686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
