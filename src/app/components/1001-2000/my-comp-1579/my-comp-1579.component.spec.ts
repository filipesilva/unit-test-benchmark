import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1579Component } from './my-comp-1579.component';

describe('MyComp1579Component', () => {
  let component: MyComp1579Component;
  let fixture: ComponentFixture<MyComp1579Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1579Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
