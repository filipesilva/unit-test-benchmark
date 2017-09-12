import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8072Component } from './my-comp-8072.component';

describe('MyComp8072Component', () => {
  let component: MyComp8072Component;
  let fixture: ComponentFixture<MyComp8072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
