import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6352Component } from './my-comp-6352.component';

describe('MyComp6352Component', () => {
  let component: MyComp6352Component;
  let fixture: ComponentFixture<MyComp6352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
