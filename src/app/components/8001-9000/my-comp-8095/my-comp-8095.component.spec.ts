import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8095Component } from './my-comp-8095.component';

describe('MyComp8095Component', () => {
  let component: MyComp8095Component;
  let fixture: ComponentFixture<MyComp8095Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8095Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
