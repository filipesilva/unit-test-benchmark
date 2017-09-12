import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2994Component } from './my-comp-2994.component';

describe('MyComp2994Component', () => {
  let component: MyComp2994Component;
  let fixture: ComponentFixture<MyComp2994Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2994Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
