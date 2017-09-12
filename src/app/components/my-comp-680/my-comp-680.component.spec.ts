import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp680Component } from './my-comp-680.component';

describe('MyComp680Component', () => {
  let component: MyComp680Component;
  let fixture: ComponentFixture<MyComp680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
