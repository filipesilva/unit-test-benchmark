import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8676Component } from './my-comp-8676.component';

describe('MyComp8676Component', () => {
  let component: MyComp8676Component;
  let fixture: ComponentFixture<MyComp8676Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8676Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
