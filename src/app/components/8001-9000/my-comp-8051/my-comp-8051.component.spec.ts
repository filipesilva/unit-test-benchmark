import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8051Component } from './my-comp-8051.component';

describe('MyComp8051Component', () => {
  let component: MyComp8051Component;
  let fixture: ComponentFixture<MyComp8051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
