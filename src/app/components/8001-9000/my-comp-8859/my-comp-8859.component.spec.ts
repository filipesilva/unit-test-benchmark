import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8859Component } from './my-comp-8859.component';

describe('MyComp8859Component', () => {
  let component: MyComp8859Component;
  let fixture: ComponentFixture<MyComp8859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
