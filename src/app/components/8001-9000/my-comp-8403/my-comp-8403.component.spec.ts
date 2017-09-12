import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8403Component } from './my-comp-8403.component';

describe('MyComp8403Component', () => {
  let component: MyComp8403Component;
  let fixture: ComponentFixture<MyComp8403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
