import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6299Component } from './my-comp-6299.component';

describe('MyComp6299Component', () => {
  let component: MyComp6299Component;
  let fixture: ComponentFixture<MyComp6299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
