import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9089Component } from './my-comp-9089.component';

describe('MyComp9089Component', () => {
  let component: MyComp9089Component;
  let fixture: ComponentFixture<MyComp9089Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9089Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
