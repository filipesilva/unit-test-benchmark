import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp485Component } from './my-comp-485.component';

describe('MyComp485Component', () => {
  let component: MyComp485Component;
  let fixture: ComponentFixture<MyComp485Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp485Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
