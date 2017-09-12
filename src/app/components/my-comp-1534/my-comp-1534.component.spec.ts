import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1534Component } from './my-comp-1534.component';

describe('MyComp1534Component', () => {
  let component: MyComp1534Component;
  let fixture: ComponentFixture<MyComp1534Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1534Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
