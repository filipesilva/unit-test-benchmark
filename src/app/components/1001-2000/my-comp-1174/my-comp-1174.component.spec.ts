import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1174Component } from './my-comp-1174.component';

describe('MyComp1174Component', () => {
  let component: MyComp1174Component;
  let fixture: ComponentFixture<MyComp1174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
