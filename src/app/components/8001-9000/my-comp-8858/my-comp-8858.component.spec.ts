import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8858Component } from './my-comp-8858.component';

describe('MyComp8858Component', () => {
  let component: MyComp8858Component;
  let fixture: ComponentFixture<MyComp8858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
