import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1597Component } from './my-comp-1597.component';

describe('MyComp1597Component', () => {
  let component: MyComp1597Component;
  let fixture: ComponentFixture<MyComp1597Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1597Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
