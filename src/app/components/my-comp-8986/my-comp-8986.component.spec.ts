import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8986Component } from './my-comp-8986.component';

describe('MyComp8986Component', () => {
  let component: MyComp8986Component;
  let fixture: ComponentFixture<MyComp8986Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8986Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
