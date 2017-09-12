import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4405Component } from './my-comp-4405.component';

describe('MyComp4405Component', () => {
  let component: MyComp4405Component;
  let fixture: ComponentFixture<MyComp4405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
