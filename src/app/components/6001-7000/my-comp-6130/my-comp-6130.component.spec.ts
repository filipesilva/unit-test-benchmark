import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6130Component } from './my-comp-6130.component';

describe('MyComp6130Component', () => {
  let component: MyComp6130Component;
  let fixture: ComponentFixture<MyComp6130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
