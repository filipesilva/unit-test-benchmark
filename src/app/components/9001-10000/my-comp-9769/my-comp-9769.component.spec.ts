import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9769Component } from './my-comp-9769.component';

describe('MyComp9769Component', () => {
  let component: MyComp9769Component;
  let fixture: ComponentFixture<MyComp9769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
