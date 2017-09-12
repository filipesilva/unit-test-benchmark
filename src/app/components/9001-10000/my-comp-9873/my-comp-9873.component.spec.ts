import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9873Component } from './my-comp-9873.component';

describe('MyComp9873Component', () => {
  let component: MyComp9873Component;
  let fixture: ComponentFixture<MyComp9873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9873Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
