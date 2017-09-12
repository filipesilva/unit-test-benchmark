import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2225Component } from './my-comp-2225.component';

describe('MyComp2225Component', () => {
  let component: MyComp2225Component;
  let fixture: ComponentFixture<MyComp2225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
