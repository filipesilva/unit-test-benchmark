import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9603Component } from './my-comp-9603.component';

describe('MyComp9603Component', () => {
  let component: MyComp9603Component;
  let fixture: ComponentFixture<MyComp9603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
