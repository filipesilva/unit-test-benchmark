import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8328Component } from './my-comp-8328.component';

describe('MyComp8328Component', () => {
  let component: MyComp8328Component;
  let fixture: ComponentFixture<MyComp8328Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8328Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
