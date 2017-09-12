import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6203Component } from './my-comp-6203.component';

describe('MyComp6203Component', () => {
  let component: MyComp6203Component;
  let fixture: ComponentFixture<MyComp6203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
