import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8849Component } from './my-comp-8849.component';

describe('MyComp8849Component', () => {
  let component: MyComp8849Component;
  let fixture: ComponentFixture<MyComp8849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
