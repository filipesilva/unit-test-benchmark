import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6960Component } from './my-comp-6960.component';

describe('MyComp6960Component', () => {
  let component: MyComp6960Component;
  let fixture: ComponentFixture<MyComp6960Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6960Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
