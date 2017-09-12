import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9958Component } from './my-comp-9958.component';

describe('MyComp9958Component', () => {
  let component: MyComp9958Component;
  let fixture: ComponentFixture<MyComp9958Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9958Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
