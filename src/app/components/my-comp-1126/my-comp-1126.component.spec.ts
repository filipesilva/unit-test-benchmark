import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1126Component } from './my-comp-1126.component';

describe('MyComp1126Component', () => {
  let component: MyComp1126Component;
  let fixture: ComponentFixture<MyComp1126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
