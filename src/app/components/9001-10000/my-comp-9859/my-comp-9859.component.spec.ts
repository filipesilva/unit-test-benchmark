import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9859Component } from './my-comp-9859.component';

describe('MyComp9859Component', () => {
  let component: MyComp9859Component;
  let fixture: ComponentFixture<MyComp9859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
