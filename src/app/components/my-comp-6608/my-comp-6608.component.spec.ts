import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6608Component } from './my-comp-6608.component';

describe('MyComp6608Component', () => {
  let component: MyComp6608Component;
  let fixture: ComponentFixture<MyComp6608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6608Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
