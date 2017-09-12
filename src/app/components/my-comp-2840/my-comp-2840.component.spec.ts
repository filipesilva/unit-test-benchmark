import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2840Component } from './my-comp-2840.component';

describe('MyComp2840Component', () => {
  let component: MyComp2840Component;
  let fixture: ComponentFixture<MyComp2840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2840Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
