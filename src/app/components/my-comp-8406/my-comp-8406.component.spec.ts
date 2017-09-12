import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8406Component } from './my-comp-8406.component';

describe('MyComp8406Component', () => {
  let component: MyComp8406Component;
  let fixture: ComponentFixture<MyComp8406Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8406Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
