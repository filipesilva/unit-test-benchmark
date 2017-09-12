import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6638Component } from './my-comp-6638.component';

describe('MyComp6638Component', () => {
  let component: MyComp6638Component;
  let fixture: ComponentFixture<MyComp6638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6638Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
