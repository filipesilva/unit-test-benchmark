import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8049Component } from './my-comp-8049.component';

describe('MyComp8049Component', () => {
  let component: MyComp8049Component;
  let fixture: ComponentFixture<MyComp8049Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8049Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
