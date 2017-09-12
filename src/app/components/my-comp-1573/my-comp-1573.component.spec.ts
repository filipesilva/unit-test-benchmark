import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1573Component } from './my-comp-1573.component';

describe('MyComp1573Component', () => {
  let component: MyComp1573Component;
  let fixture: ComponentFixture<MyComp1573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
