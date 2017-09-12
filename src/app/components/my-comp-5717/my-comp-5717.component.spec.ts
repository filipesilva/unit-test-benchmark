import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5717Component } from './my-comp-5717.component';

describe('MyComp5717Component', () => {
  let component: MyComp5717Component;
  let fixture: ComponentFixture<MyComp5717Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5717Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
