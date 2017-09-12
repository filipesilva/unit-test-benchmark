import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4109Component } from './my-comp-4109.component';

describe('MyComp4109Component', () => {
  let component: MyComp4109Component;
  let fixture: ComponentFixture<MyComp4109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
