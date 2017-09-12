import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp275Component } from './my-comp-275.component';

describe('MyComp275Component', () => {
  let component: MyComp275Component;
  let fixture: ComponentFixture<MyComp275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
