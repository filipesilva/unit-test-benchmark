import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6532Component } from './my-comp-6532.component';

describe('MyComp6532Component', () => {
  let component: MyComp6532Component;
  let fixture: ComponentFixture<MyComp6532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
