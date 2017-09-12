import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2017Component } from './my-comp-2017.component';

describe('MyComp2017Component', () => {
  let component: MyComp2017Component;
  let fixture: ComponentFixture<MyComp2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
