import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8529Component } from './my-comp-8529.component';

describe('MyComp8529Component', () => {
  let component: MyComp8529Component;
  let fixture: ComponentFixture<MyComp8529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8529Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
