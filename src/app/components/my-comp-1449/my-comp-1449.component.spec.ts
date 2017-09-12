import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1449Component } from './my-comp-1449.component';

describe('MyComp1449Component', () => {
  let component: MyComp1449Component;
  let fixture: ComponentFixture<MyComp1449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
