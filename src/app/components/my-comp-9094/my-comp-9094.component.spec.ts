import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9094Component } from './my-comp-9094.component';

describe('MyComp9094Component', () => {
  let component: MyComp9094Component;
  let fixture: ComponentFixture<MyComp9094Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9094Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
