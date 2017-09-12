import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8903Component } from './my-comp-8903.component';

describe('MyComp8903Component', () => {
  let component: MyComp8903Component;
  let fixture: ComponentFixture<MyComp8903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
