import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4447Component } from './my-comp-4447.component';

describe('MyComp4447Component', () => {
  let component: MyComp4447Component;
  let fixture: ComponentFixture<MyComp4447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
