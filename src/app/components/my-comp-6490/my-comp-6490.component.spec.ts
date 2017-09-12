import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6490Component } from './my-comp-6490.component';

describe('MyComp6490Component', () => {
  let component: MyComp6490Component;
  let fixture: ComponentFixture<MyComp6490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6490Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
