import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2962Component } from './my-comp-2962.component';

describe('MyComp2962Component', () => {
  let component: MyComp2962Component;
  let fixture: ComponentFixture<MyComp2962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
