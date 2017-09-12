import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2320Component } from './my-comp-2320.component';

describe('MyComp2320Component', () => {
  let component: MyComp2320Component;
  let fixture: ComponentFixture<MyComp2320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
