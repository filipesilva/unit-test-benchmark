import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6631Component } from './my-comp-6631.component';

describe('MyComp6631Component', () => {
  let component: MyComp6631Component;
  let fixture: ComponentFixture<MyComp6631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
