import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6562Component } from './my-comp-6562.component';

describe('MyComp6562Component', () => {
  let component: MyComp6562Component;
  let fixture: ComponentFixture<MyComp6562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
