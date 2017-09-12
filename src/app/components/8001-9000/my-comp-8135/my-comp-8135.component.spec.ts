import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8135Component } from './my-comp-8135.component';

describe('MyComp8135Component', () => {
  let component: MyComp8135Component;
  let fixture: ComponentFixture<MyComp8135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
