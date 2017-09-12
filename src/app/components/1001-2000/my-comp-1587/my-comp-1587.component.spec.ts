import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1587Component } from './my-comp-1587.component';

describe('MyComp1587Component', () => {
  let component: MyComp1587Component;
  let fixture: ComponentFixture<MyComp1587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
