import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8811Component } from './my-comp-8811.component';

describe('MyComp8811Component', () => {
  let component: MyComp8811Component;
  let fixture: ComponentFixture<MyComp8811Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8811Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
