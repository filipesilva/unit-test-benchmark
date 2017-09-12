import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6376Component } from './my-comp-6376.component';

describe('MyComp6376Component', () => {
  let component: MyComp6376Component;
  let fixture: ComponentFixture<MyComp6376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
