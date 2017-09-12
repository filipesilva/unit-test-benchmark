import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6774Component } from './my-comp-6774.component';

describe('MyComp6774Component', () => {
  let component: MyComp6774Component;
  let fixture: ComponentFixture<MyComp6774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6774Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
