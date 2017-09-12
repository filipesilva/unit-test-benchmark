import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1451Component } from './my-comp-1451.component';

describe('MyComp1451Component', () => {
  let component: MyComp1451Component;
  let fixture: ComponentFixture<MyComp1451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1451Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
