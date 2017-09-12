import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8482Component } from './my-comp-8482.component';

describe('MyComp8482Component', () => {
  let component: MyComp8482Component;
  let fixture: ComponentFixture<MyComp8482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
