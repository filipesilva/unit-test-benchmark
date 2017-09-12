import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8463Component } from './my-comp-8463.component';

describe('MyComp8463Component', () => {
  let component: MyComp8463Component;
  let fixture: ComponentFixture<MyComp8463Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8463Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
