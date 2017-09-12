import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6637Component } from './my-comp-6637.component';

describe('MyComp6637Component', () => {
  let component: MyComp6637Component;
  let fixture: ComponentFixture<MyComp6637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6637Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
