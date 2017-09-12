import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8591Component } from './my-comp-8591.component';

describe('MyComp8591Component', () => {
  let component: MyComp8591Component;
  let fixture: ComponentFixture<MyComp8591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
