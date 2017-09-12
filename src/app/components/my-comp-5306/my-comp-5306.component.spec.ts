import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5306Component } from './my-comp-5306.component';

describe('MyComp5306Component', () => {
  let component: MyComp5306Component;
  let fixture: ComponentFixture<MyComp5306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5306Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
