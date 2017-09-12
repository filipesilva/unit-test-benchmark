import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4955Component } from './my-comp-4955.component';

describe('MyComp4955Component', () => {
  let component: MyComp4955Component;
  let fixture: ComponentFixture<MyComp4955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
