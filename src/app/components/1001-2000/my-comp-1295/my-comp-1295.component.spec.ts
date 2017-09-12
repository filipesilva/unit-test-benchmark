import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1295Component } from './my-comp-1295.component';

describe('MyComp1295Component', () => {
  let component: MyComp1295Component;
  let fixture: ComponentFixture<MyComp1295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1295Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
