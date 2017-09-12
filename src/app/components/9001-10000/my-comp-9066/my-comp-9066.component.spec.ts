import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9066Component } from './my-comp-9066.component';

describe('MyComp9066Component', () => {
  let component: MyComp9066Component;
  let fixture: ComponentFixture<MyComp9066Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9066Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
