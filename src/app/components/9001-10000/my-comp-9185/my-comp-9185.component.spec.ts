import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9185Component } from './my-comp-9185.component';

describe('MyComp9185Component', () => {
  let component: MyComp9185Component;
  let fixture: ComponentFixture<MyComp9185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
