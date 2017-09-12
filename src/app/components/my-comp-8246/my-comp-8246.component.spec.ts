import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8246Component } from './my-comp-8246.component';

describe('MyComp8246Component', () => {
  let component: MyComp8246Component;
  let fixture: ComponentFixture<MyComp8246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
