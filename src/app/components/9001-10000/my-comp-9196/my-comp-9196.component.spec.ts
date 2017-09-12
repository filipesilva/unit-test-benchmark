import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9196Component } from './my-comp-9196.component';

describe('MyComp9196Component', () => {
  let component: MyComp9196Component;
  let fixture: ComponentFixture<MyComp9196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
