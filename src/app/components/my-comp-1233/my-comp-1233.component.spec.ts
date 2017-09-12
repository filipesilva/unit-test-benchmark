import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1233Component } from './my-comp-1233.component';

describe('MyComp1233Component', () => {
  let component: MyComp1233Component;
  let fixture: ComponentFixture<MyComp1233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
