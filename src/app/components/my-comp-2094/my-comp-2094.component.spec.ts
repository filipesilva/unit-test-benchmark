import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2094Component } from './my-comp-2094.component';

describe('MyComp2094Component', () => {
  let component: MyComp2094Component;
  let fixture: ComponentFixture<MyComp2094Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2094Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
