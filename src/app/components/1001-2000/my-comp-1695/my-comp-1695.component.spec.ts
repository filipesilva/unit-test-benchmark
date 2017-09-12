import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1695Component } from './my-comp-1695.component';

describe('MyComp1695Component', () => {
  let component: MyComp1695Component;
  let fixture: ComponentFixture<MyComp1695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1695Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
