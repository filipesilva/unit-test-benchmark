import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2584Component } from './my-comp-2584.component';

describe('MyComp2584Component', () => {
  let component: MyComp2584Component;
  let fixture: ComponentFixture<MyComp2584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2584Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
