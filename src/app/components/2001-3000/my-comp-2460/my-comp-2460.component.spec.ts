import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2460Component } from './my-comp-2460.component';

describe('MyComp2460Component', () => {
  let component: MyComp2460Component;
  let fixture: ComponentFixture<MyComp2460Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2460Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
