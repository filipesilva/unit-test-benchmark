import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2667Component } from './my-comp-2667.component';

describe('MyComp2667Component', () => {
  let component: MyComp2667Component;
  let fixture: ComponentFixture<MyComp2667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
