import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6111Component } from './my-comp-6111.component';

describe('MyComp6111Component', () => {
  let component: MyComp6111Component;
  let fixture: ComponentFixture<MyComp6111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
