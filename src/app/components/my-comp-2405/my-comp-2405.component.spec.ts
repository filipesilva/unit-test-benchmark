import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2405Component } from './my-comp-2405.component';

describe('MyComp2405Component', () => {
  let component: MyComp2405Component;
  let fixture: ComponentFixture<MyComp2405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
