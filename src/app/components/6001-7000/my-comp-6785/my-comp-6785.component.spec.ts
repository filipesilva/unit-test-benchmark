import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6785Component } from './my-comp-6785.component';

describe('MyComp6785Component', () => {
  let component: MyComp6785Component;
  let fixture: ComponentFixture<MyComp6785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
