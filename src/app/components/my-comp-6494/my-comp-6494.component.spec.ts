import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6494Component } from './my-comp-6494.component';

describe('MyComp6494Component', () => {
  let component: MyComp6494Component;
  let fixture: ComponentFixture<MyComp6494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6494Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
