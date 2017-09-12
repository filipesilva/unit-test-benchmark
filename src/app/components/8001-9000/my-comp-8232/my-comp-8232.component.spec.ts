import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8232Component } from './my-comp-8232.component';

describe('MyComp8232Component', () => {
  let component: MyComp8232Component;
  let fixture: ComponentFixture<MyComp8232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
