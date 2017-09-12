import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9307Component } from './my-comp-9307.component';

describe('MyComp9307Component', () => {
  let component: MyComp9307Component;
  let fixture: ComponentFixture<MyComp9307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
