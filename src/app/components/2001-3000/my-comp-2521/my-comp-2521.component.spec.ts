import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2521Component } from './my-comp-2521.component';

describe('MyComp2521Component', () => {
  let component: MyComp2521Component;
  let fixture: ComponentFixture<MyComp2521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
