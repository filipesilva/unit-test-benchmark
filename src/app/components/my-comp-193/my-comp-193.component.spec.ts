import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp193Component } from './my-comp-193.component';

describe('MyComp193Component', () => {
  let component: MyComp193Component;
  let fixture: ComponentFixture<MyComp193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
