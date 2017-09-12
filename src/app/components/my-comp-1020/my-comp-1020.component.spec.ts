import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1020Component } from './my-comp-1020.component';

describe('MyComp1020Component', () => {
  let component: MyComp1020Component;
  let fixture: ComponentFixture<MyComp1020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
