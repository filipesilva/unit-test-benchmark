import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4211Component } from './my-comp-4211.component';

describe('MyComp4211Component', () => {
  let component: MyComp4211Component;
  let fixture: ComponentFixture<MyComp4211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
