import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6614Component } from './my-comp-6614.component';

describe('MyComp6614Component', () => {
  let component: MyComp6614Component;
  let fixture: ComponentFixture<MyComp6614Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6614Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
