import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4222Component } from './my-comp-4222.component';

describe('MyComp4222Component', () => {
  let component: MyComp4222Component;
  let fixture: ComponentFixture<MyComp4222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
