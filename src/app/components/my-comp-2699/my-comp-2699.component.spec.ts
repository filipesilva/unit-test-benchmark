import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2699Component } from './my-comp-2699.component';

describe('MyComp2699Component', () => {
  let component: MyComp2699Component;
  let fixture: ComponentFixture<MyComp2699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
