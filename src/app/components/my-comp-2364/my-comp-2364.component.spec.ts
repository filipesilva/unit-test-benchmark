import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2364Component } from './my-comp-2364.component';

describe('MyComp2364Component', () => {
  let component: MyComp2364Component;
  let fixture: ComponentFixture<MyComp2364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
