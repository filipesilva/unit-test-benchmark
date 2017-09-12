import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2219Component } from './my-comp-2219.component';

describe('MyComp2219Component', () => {
  let component: MyComp2219Component;
  let fixture: ComponentFixture<MyComp2219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
