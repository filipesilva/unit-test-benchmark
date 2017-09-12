import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9288Component } from './my-comp-9288.component';

describe('MyComp9288Component', () => {
  let component: MyComp9288Component;
  let fixture: ComponentFixture<MyComp9288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
