import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9957Component } from './my-comp-9957.component';

describe('MyComp9957Component', () => {
  let component: MyComp9957Component;
  let fixture: ComponentFixture<MyComp9957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
