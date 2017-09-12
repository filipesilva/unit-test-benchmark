import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4596Component } from './my-comp-4596.component';

describe('MyComp4596Component', () => {
  let component: MyComp4596Component;
  let fixture: ComponentFixture<MyComp4596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
