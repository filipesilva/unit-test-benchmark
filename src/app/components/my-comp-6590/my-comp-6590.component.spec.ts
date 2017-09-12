import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6590Component } from './my-comp-6590.component';

describe('MyComp6590Component', () => {
  let component: MyComp6590Component;
  let fixture: ComponentFixture<MyComp6590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
