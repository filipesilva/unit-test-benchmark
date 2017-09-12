import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2677Component } from './my-comp-2677.component';

describe('MyComp2677Component', () => {
  let component: MyComp2677Component;
  let fixture: ComponentFixture<MyComp2677Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2677Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
