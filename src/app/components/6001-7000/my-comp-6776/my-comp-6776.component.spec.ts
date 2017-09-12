import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6776Component } from './my-comp-6776.component';

describe('MyComp6776Component', () => {
  let component: MyComp6776Component;
  let fixture: ComponentFixture<MyComp6776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
