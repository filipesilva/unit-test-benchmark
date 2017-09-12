import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6704Component } from './my-comp-6704.component';

describe('MyComp6704Component', () => {
  let component: MyComp6704Component;
  let fixture: ComponentFixture<MyComp6704Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6704Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
