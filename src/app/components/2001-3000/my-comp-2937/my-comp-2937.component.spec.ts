import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2937Component } from './my-comp-2937.component';

describe('MyComp2937Component', () => {
  let component: MyComp2937Component;
  let fixture: ComponentFixture<MyComp2937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2937Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
