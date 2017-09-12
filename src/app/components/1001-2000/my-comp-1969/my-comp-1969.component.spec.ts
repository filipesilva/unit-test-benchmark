import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1969Component } from './my-comp-1969.component';

describe('MyComp1969Component', () => {
  let component: MyComp1969Component;
  let fixture: ComponentFixture<MyComp1969Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1969Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
