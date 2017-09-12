import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1523Component } from './my-comp-1523.component';

describe('MyComp1523Component', () => {
  let component: MyComp1523Component;
  let fixture: ComponentFixture<MyComp1523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
