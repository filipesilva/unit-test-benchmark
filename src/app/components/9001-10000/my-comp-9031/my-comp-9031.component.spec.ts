import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9031Component } from './my-comp-9031.component';

describe('MyComp9031Component', () => {
  let component: MyComp9031Component;
  let fixture: ComponentFixture<MyComp9031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
