import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4938Component } from './my-comp-4938.component';

describe('MyComp4938Component', () => {
  let component: MyComp4938Component;
  let fixture: ComponentFixture<MyComp4938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
