import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6434Component } from './my-comp-6434.component';

describe('MyComp6434Component', () => {
  let component: MyComp6434Component;
  let fixture: ComponentFixture<MyComp6434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6434Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
