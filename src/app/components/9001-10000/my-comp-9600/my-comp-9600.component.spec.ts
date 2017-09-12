import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9600Component } from './my-comp-9600.component';

describe('MyComp9600Component', () => {
  let component: MyComp9600Component;
  let fixture: ComponentFixture<MyComp9600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
