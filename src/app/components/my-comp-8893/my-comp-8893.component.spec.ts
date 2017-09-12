import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8893Component } from './my-comp-8893.component';

describe('MyComp8893Component', () => {
  let component: MyComp8893Component;
  let fixture: ComponentFixture<MyComp8893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
