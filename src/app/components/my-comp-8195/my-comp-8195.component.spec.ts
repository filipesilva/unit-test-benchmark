import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8195Component } from './my-comp-8195.component';

describe('MyComp8195Component', () => {
  let component: MyComp8195Component;
  let fixture: ComponentFixture<MyComp8195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
