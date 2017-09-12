import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2393Component } from './my-comp-2393.component';

describe('MyComp2393Component', () => {
  let component: MyComp2393Component;
  let fixture: ComponentFixture<MyComp2393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2393Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
