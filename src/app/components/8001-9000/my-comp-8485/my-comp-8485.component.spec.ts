import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8485Component } from './my-comp-8485.component';

describe('MyComp8485Component', () => {
  let component: MyComp8485Component;
  let fixture: ComponentFixture<MyComp8485Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8485Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
