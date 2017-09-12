import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9753Component } from './my-comp-9753.component';

describe('MyComp9753Component', () => {
  let component: MyComp9753Component;
  let fixture: ComponentFixture<MyComp9753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
