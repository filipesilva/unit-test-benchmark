import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8697Component } from './my-comp-8697.component';

describe('MyComp8697Component', () => {
  let component: MyComp8697Component;
  let fixture: ComponentFixture<MyComp8697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
