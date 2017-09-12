import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1788Component } from './my-comp-1788.component';

describe('MyComp1788Component', () => {
  let component: MyComp1788Component;
  let fixture: ComponentFixture<MyComp1788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
