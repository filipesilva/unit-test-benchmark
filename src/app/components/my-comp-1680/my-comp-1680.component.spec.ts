import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1680Component } from './my-comp-1680.component';

describe('MyComp1680Component', () => {
  let component: MyComp1680Component;
  let fixture: ComponentFixture<MyComp1680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
