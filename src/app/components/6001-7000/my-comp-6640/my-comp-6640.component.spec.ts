import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6640Component } from './my-comp-6640.component';

describe('MyComp6640Component', () => {
  let component: MyComp6640Component;
  let fixture: ComponentFixture<MyComp6640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6640Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
