import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6506Component } from './my-comp-6506.component';

describe('MyComp6506Component', () => {
  let component: MyComp6506Component;
  let fixture: ComponentFixture<MyComp6506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
