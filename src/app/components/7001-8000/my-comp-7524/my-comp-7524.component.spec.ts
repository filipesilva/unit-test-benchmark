import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7524Component } from './my-comp-7524.component';

describe('MyComp7524Component', () => {
  let component: MyComp7524Component;
  let fixture: ComponentFixture<MyComp7524Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7524Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
