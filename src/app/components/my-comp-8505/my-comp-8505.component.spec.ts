import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8505Component } from './my-comp-8505.component';

describe('MyComp8505Component', () => {
  let component: MyComp8505Component;
  let fixture: ComponentFixture<MyComp8505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
