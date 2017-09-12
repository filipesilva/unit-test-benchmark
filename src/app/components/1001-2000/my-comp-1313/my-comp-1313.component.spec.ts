import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1313Component } from './my-comp-1313.component';

describe('MyComp1313Component', () => {
  let component: MyComp1313Component;
  let fixture: ComponentFixture<MyComp1313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
