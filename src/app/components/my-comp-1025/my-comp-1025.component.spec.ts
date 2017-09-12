import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1025Component } from './my-comp-1025.component';

describe('MyComp1025Component', () => {
  let component: MyComp1025Component;
  let fixture: ComponentFixture<MyComp1025Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1025Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
