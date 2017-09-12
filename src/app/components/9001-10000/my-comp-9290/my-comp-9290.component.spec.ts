import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9290Component } from './my-comp-9290.component';

describe('MyComp9290Component', () => {
  let component: MyComp9290Component;
  let fixture: ComponentFixture<MyComp9290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
