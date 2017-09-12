import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6200Component } from './my-comp-6200.component';

describe('MyComp6200Component', () => {
  let component: MyComp6200Component;
  let fixture: ComponentFixture<MyComp6200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
