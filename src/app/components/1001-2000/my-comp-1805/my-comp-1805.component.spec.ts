import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1805Component } from './my-comp-1805.component';

describe('MyComp1805Component', () => {
  let component: MyComp1805Component;
  let fixture: ComponentFixture<MyComp1805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
