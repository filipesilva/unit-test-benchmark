import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9366Component } from './my-comp-9366.component';

describe('MyComp9366Component', () => {
  let component: MyComp9366Component;
  let fixture: ComponentFixture<MyComp9366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9366Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
