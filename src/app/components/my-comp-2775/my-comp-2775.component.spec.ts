import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2775Component } from './my-comp-2775.component';

describe('MyComp2775Component', () => {
  let component: MyComp2775Component;
  let fixture: ComponentFixture<MyComp2775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
