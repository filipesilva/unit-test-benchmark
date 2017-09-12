import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9391Component } from './my-comp-9391.component';

describe('MyComp9391Component', () => {
  let component: MyComp9391Component;
  let fixture: ComponentFixture<MyComp9391Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9391Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
