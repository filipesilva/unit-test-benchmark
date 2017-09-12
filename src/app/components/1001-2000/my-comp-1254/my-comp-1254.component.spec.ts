import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1254Component } from './my-comp-1254.component';

describe('MyComp1254Component', () => {
  let component: MyComp1254Component;
  let fixture: ComponentFixture<MyComp1254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
