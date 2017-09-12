import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7367Component } from './my-comp-7367.component';

describe('MyComp7367Component', () => {
  let component: MyComp7367Component;
  let fixture: ComponentFixture<MyComp7367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
