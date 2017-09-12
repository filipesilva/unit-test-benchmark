import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9401Component } from './my-comp-9401.component';

describe('MyComp9401Component', () => {
  let component: MyComp9401Component;
  let fixture: ComponentFixture<MyComp9401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
