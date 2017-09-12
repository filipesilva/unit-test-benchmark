import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9641Component } from './my-comp-9641.component';

describe('MyComp9641Component', () => {
  let component: MyComp9641Component;
  let fixture: ComponentFixture<MyComp9641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
