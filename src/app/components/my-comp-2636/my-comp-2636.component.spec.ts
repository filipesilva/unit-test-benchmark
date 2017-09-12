import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2636Component } from './my-comp-2636.component';

describe('MyComp2636Component', () => {
  let component: MyComp2636Component;
  let fixture: ComponentFixture<MyComp2636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2636Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
