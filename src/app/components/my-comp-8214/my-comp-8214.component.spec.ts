import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8214Component } from './my-comp-8214.component';

describe('MyComp8214Component', () => {
  let component: MyComp8214Component;
  let fixture: ComponentFixture<MyComp8214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
