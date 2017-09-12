import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2746Component } from './my-comp-2746.component';

describe('MyComp2746Component', () => {
  let component: MyComp2746Component;
  let fixture: ComponentFixture<MyComp2746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
