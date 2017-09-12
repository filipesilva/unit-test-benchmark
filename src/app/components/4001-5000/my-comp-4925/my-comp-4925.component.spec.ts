import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4925Component } from './my-comp-4925.component';

describe('MyComp4925Component', () => {
  let component: MyComp4925Component;
  let fixture: ComponentFixture<MyComp4925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4925Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
