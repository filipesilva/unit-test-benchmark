import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2888Component } from './my-comp-2888.component';

describe('MyComp2888Component', () => {
  let component: MyComp2888Component;
  let fixture: ComponentFixture<MyComp2888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2888Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
