import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2782Component } from './my-comp-2782.component';

describe('MyComp2782Component', () => {
  let component: MyComp2782Component;
  let fixture: ComponentFixture<MyComp2782Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2782Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
