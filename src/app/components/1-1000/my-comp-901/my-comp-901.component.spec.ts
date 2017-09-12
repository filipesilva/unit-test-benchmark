import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp901Component } from './my-comp-901.component';

describe('MyComp901Component', () => {
  let component: MyComp901Component;
  let fixture: ComponentFixture<MyComp901Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp901Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
