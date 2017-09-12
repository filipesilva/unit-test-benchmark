import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8234Component } from './my-comp-8234.component';

describe('MyComp8234Component', () => {
  let component: MyComp8234Component;
  let fixture: ComponentFixture<MyComp8234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
