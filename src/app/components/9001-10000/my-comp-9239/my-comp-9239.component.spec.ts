import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9239Component } from './my-comp-9239.component';

describe('MyComp9239Component', () => {
  let component: MyComp9239Component;
  let fixture: ComponentFixture<MyComp9239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
