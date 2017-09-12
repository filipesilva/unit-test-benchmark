import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6477Component } from './my-comp-6477.component';

describe('MyComp6477Component', () => {
  let component: MyComp6477Component;
  let fixture: ComponentFixture<MyComp6477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6477Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
