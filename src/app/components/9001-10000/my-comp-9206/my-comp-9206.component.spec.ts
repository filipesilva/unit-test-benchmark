import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9206Component } from './my-comp-9206.component';

describe('MyComp9206Component', () => {
  let component: MyComp9206Component;
  let fixture: ComponentFixture<MyComp9206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
