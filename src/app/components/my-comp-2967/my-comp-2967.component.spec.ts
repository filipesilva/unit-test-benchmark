import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2967Component } from './my-comp-2967.component';

describe('MyComp2967Component', () => {
  let component: MyComp2967Component;
  let fixture: ComponentFixture<MyComp2967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
