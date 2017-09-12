import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8726Component } from './my-comp-8726.component';

describe('MyComp8726Component', () => {
  let component: MyComp8726Component;
  let fixture: ComponentFixture<MyComp8726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
