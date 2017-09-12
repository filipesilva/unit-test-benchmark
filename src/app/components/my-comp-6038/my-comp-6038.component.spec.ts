import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6038Component } from './my-comp-6038.component';

describe('MyComp6038Component', () => {
  let component: MyComp6038Component;
  let fixture: ComponentFixture<MyComp6038Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6038Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
