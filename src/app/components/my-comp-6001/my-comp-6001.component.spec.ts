import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6001Component } from './my-comp-6001.component';

describe('MyComp6001Component', () => {
  let component: MyComp6001Component;
  let fixture: ComponentFixture<MyComp6001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
