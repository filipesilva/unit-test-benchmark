import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1477Component } from './my-comp-1477.component';

describe('MyComp1477Component', () => {
  let component: MyComp1477Component;
  let fixture: ComponentFixture<MyComp1477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1477Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
