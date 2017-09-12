import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2734Component } from './my-comp-2734.component';

describe('MyComp2734Component', () => {
  let component: MyComp2734Component;
  let fixture: ComponentFixture<MyComp2734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2734Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
