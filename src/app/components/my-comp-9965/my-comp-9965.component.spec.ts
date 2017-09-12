import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9965Component } from './my-comp-9965.component';

describe('MyComp9965Component', () => {
  let component: MyComp9965Component;
  let fixture: ComponentFixture<MyComp9965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
