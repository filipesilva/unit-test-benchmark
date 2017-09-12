import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2081Component } from './my-comp-2081.component';

describe('MyComp2081Component', () => {
  let component: MyComp2081Component;
  let fixture: ComponentFixture<MyComp2081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
