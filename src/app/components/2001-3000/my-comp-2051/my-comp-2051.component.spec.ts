import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2051Component } from './my-comp-2051.component';

describe('MyComp2051Component', () => {
  let component: MyComp2051Component;
  let fixture: ComponentFixture<MyComp2051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
