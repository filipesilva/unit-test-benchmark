import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2757Component } from './my-comp-2757.component';

describe('MyComp2757Component', () => {
  let component: MyComp2757Component;
  let fixture: ComponentFixture<MyComp2757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2757Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
