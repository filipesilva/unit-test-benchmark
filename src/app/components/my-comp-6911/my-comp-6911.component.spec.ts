import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6911Component } from './my-comp-6911.component';

describe('MyComp6911Component', () => {
  let component: MyComp6911Component;
  let fixture: ComponentFixture<MyComp6911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
