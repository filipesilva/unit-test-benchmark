import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2235Component } from './my-comp-2235.component';

describe('MyComp2235Component', () => {
  let component: MyComp2235Component;
  let fixture: ComponentFixture<MyComp2235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
