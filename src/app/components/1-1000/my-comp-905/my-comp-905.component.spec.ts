import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp905Component } from './my-comp-905.component';

describe('MyComp905Component', () => {
  let component: MyComp905Component;
  let fixture: ComponentFixture<MyComp905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
