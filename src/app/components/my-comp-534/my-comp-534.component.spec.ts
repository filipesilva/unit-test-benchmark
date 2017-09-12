import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp534Component } from './my-comp-534.component';

describe('MyComp534Component', () => {
  let component: MyComp534Component;
  let fixture: ComponentFixture<MyComp534Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp534Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
