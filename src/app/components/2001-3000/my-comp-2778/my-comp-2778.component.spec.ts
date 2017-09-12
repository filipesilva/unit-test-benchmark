import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2778Component } from './my-comp-2778.component';

describe('MyComp2778Component', () => {
  let component: MyComp2778Component;
  let fixture: ComponentFixture<MyComp2778Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2778Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
