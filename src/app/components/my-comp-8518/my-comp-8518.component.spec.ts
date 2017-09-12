import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8518Component } from './my-comp-8518.component';

describe('MyComp8518Component', () => {
  let component: MyComp8518Component;
  let fixture: ComponentFixture<MyComp8518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
