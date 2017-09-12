import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp581Component } from './my-comp-581.component';

describe('MyComp581Component', () => {
  let component: MyComp581Component;
  let fixture: ComponentFixture<MyComp581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
