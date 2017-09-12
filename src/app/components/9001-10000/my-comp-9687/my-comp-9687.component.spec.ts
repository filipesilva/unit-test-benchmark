import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9687Component } from './my-comp-9687.component';

describe('MyComp9687Component', () => {
  let component: MyComp9687Component;
  let fixture: ComponentFixture<MyComp9687Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9687Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
