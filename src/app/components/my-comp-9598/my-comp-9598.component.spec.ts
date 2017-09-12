import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9598Component } from './my-comp-9598.component';

describe('MyComp9598Component', () => {
  let component: MyComp9598Component;
  let fixture: ComponentFixture<MyComp9598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9598Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
