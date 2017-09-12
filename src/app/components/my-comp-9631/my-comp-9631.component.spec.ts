import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9631Component } from './my-comp-9631.component';

describe('MyComp9631Component', () => {
  let component: MyComp9631Component;
  let fixture: ComponentFixture<MyComp9631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
