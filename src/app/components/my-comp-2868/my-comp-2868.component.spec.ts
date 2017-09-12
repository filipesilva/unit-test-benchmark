import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2868Component } from './my-comp-2868.component';

describe('MyComp2868Component', () => {
  let component: MyComp2868Component;
  let fixture: ComponentFixture<MyComp2868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
