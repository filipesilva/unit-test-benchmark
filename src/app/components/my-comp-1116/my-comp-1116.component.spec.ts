import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1116Component } from './my-comp-1116.component';

describe('MyComp1116Component', () => {
  let component: MyComp1116Component;
  let fixture: ComponentFixture<MyComp1116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
