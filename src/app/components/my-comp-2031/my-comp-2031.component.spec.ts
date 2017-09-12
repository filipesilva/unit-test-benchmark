import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2031Component } from './my-comp-2031.component';

describe('MyComp2031Component', () => {
  let component: MyComp2031Component;
  let fixture: ComponentFixture<MyComp2031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
