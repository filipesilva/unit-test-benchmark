import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6586Component } from './my-comp-6586.component';

describe('MyComp6586Component', () => {
  let component: MyComp6586Component;
  let fixture: ComponentFixture<MyComp6586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6586Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
