import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2464Component } from './my-comp-2464.component';

describe('MyComp2464Component', () => {
  let component: MyComp2464Component;
  let fixture: ComponentFixture<MyComp2464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2464Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
