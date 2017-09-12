import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5302Component } from './my-comp-5302.component';

describe('MyComp5302Component', () => {
  let component: MyComp5302Component;
  let fixture: ComponentFixture<MyComp5302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
