import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6481Component } from './my-comp-6481.component';

describe('MyComp6481Component', () => {
  let component: MyComp6481Component;
  let fixture: ComponentFixture<MyComp6481Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6481Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
