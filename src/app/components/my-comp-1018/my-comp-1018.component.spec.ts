import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1018Component } from './my-comp-1018.component';

describe('MyComp1018Component', () => {
  let component: MyComp1018Component;
  let fixture: ComponentFixture<MyComp1018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
