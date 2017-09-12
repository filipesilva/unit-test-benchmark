import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8202Component } from './my-comp-8202.component';

describe('MyComp8202Component', () => {
  let component: MyComp8202Component;
  let fixture: ComponentFixture<MyComp8202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
