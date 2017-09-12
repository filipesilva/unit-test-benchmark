import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5320Component } from './my-comp-5320.component';

describe('MyComp5320Component', () => {
  let component: MyComp5320Component;
  let fixture: ComponentFixture<MyComp5320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
