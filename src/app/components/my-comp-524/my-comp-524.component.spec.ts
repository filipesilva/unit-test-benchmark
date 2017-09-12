import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp524Component } from './my-comp-524.component';

describe('MyComp524Component', () => {
  let component: MyComp524Component;
  let fixture: ComponentFixture<MyComp524Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp524Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
