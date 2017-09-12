import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1098Component } from './my-comp-1098.component';

describe('MyComp1098Component', () => {
  let component: MyComp1098Component;
  let fixture: ComponentFixture<MyComp1098Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1098Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1098Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
