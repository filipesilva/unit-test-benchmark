import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6315Component } from './my-comp-6315.component';

describe('MyComp6315Component', () => {
  let component: MyComp6315Component;
  let fixture: ComponentFixture<MyComp6315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6315Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
