import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp799Component } from './my-comp-799.component';

describe('MyComp799Component', () => {
  let component: MyComp799Component;
  let fixture: ComponentFixture<MyComp799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
