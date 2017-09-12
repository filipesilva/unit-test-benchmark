import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8558Component } from './my-comp-8558.component';

describe('MyComp8558Component', () => {
  let component: MyComp8558Component;
  let fixture: ComponentFixture<MyComp8558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8558Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
