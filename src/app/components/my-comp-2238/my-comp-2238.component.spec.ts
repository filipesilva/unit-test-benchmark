import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2238Component } from './my-comp-2238.component';

describe('MyComp2238Component', () => {
  let component: MyComp2238Component;
  let fixture: ComponentFixture<MyComp2238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
