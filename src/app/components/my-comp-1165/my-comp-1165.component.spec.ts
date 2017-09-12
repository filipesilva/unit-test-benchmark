import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1165Component } from './my-comp-1165.component';

describe('MyComp1165Component', () => {
  let component: MyComp1165Component;
  let fixture: ComponentFixture<MyComp1165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
