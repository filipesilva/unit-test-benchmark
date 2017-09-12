import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8571Component } from './my-comp-8571.component';

describe('MyComp8571Component', () => {
  let component: MyComp8571Component;
  let fixture: ComponentFixture<MyComp8571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8571Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
