import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2642Component } from './my-comp-2642.component';

describe('MyComp2642Component', () => {
  let component: MyComp2642Component;
  let fixture: ComponentFixture<MyComp2642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
