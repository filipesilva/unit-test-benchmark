import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2003Component } from './my-comp-2003.component';

describe('MyComp2003Component', () => {
  let component: MyComp2003Component;
  let fixture: ComponentFixture<MyComp2003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
