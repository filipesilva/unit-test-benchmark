import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2603Component } from './my-comp-2603.component';

describe('MyComp2603Component', () => {
  let component: MyComp2603Component;
  let fixture: ComponentFixture<MyComp2603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
