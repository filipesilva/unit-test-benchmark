import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6656Component } from './my-comp-6656.component';

describe('MyComp6656Component', () => {
  let component: MyComp6656Component;
  let fixture: ComponentFixture<MyComp6656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
