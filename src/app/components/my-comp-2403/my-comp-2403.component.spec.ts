import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2403Component } from './my-comp-2403.component';

describe('MyComp2403Component', () => {
  let component: MyComp2403Component;
  let fixture: ComponentFixture<MyComp2403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
