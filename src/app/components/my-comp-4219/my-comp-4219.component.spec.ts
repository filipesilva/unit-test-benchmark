import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4219Component } from './my-comp-4219.component';

describe('MyComp4219Component', () => {
  let component: MyComp4219Component;
  let fixture: ComponentFixture<MyComp4219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
