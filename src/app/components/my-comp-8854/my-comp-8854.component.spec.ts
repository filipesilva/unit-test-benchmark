import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8854Component } from './my-comp-8854.component';

describe('MyComp8854Component', () => {
  let component: MyComp8854Component;
  let fixture: ComponentFixture<MyComp8854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
