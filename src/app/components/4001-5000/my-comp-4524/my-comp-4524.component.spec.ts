import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4524Component } from './my-comp-4524.component';

describe('MyComp4524Component', () => {
  let component: MyComp4524Component;
  let fixture: ComponentFixture<MyComp4524Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4524Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
