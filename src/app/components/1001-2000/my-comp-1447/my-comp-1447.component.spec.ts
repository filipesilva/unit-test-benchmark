import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1447Component } from './my-comp-1447.component';

describe('MyComp1447Component', () => {
  let component: MyComp1447Component;
  let fixture: ComponentFixture<MyComp1447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
