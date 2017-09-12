import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9930Component } from './my-comp-9930.component';

describe('MyComp9930Component', () => {
  let component: MyComp9930Component;
  let fixture: ComponentFixture<MyComp9930Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9930Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
