import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9938Component } from './my-comp-9938.component';

describe('MyComp9938Component', () => {
  let component: MyComp9938Component;
  let fixture: ComponentFixture<MyComp9938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
