import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp720Component } from './my-comp-720.component';

describe('MyComp720Component', () => {
  let component: MyComp720Component;
  let fixture: ComponentFixture<MyComp720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp720Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
