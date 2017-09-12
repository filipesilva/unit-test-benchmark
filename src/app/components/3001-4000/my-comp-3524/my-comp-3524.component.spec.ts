import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3524Component } from './my-comp-3524.component';

describe('MyComp3524Component', () => {
  let component: MyComp3524Component;
  let fixture: ComponentFixture<MyComp3524Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3524Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
