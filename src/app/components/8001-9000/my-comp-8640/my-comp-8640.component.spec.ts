import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8640Component } from './my-comp-8640.component';

describe('MyComp8640Component', () => {
  let component: MyComp8640Component;
  let fixture: ComponentFixture<MyComp8640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8640Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
