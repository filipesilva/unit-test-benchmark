import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1842Component } from './my-comp-1842.component';

describe('MyComp1842Component', () => {
  let component: MyComp1842Component;
  let fixture: ComponentFixture<MyComp1842Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1842Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
