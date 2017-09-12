import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6946Component } from './my-comp-6946.component';

describe('MyComp6946Component', () => {
  let component: MyComp6946Component;
  let fixture: ComponentFixture<MyComp6946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6946Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
