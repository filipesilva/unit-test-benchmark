import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2697Component } from './my-comp-2697.component';

describe('MyComp2697Component', () => {
  let component: MyComp2697Component;
  let fixture: ComponentFixture<MyComp2697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
