import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9672Component } from './my-comp-9672.component';

describe('MyComp9672Component', () => {
  let component: MyComp9672Component;
  let fixture: ComponentFixture<MyComp9672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
