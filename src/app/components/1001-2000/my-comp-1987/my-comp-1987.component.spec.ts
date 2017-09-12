import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1987Component } from './my-comp-1987.component';

describe('MyComp1987Component', () => {
  let component: MyComp1987Component;
  let fixture: ComponentFixture<MyComp1987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1987Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
