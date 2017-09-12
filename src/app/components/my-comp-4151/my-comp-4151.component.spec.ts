import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4151Component } from './my-comp-4151.component';

describe('MyComp4151Component', () => {
  let component: MyComp4151Component;
  let fixture: ComponentFixture<MyComp4151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
