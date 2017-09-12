import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5524Component } from './my-comp-5524.component';

describe('MyComp5524Component', () => {
  let component: MyComp5524Component;
  let fixture: ComponentFixture<MyComp5524Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5524Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
