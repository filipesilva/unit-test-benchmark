import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6312Component } from './my-comp-6312.component';

describe('MyComp6312Component', () => {
  let component: MyComp6312Component;
  let fixture: ComponentFixture<MyComp6312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
