import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4302Component } from './my-comp-4302.component';

describe('MyComp4302Component', () => {
  let component: MyComp4302Component;
  let fixture: ComponentFixture<MyComp4302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
