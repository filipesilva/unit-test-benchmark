import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8128Component } from './my-comp-8128.component';

describe('MyComp8128Component', () => {
  let component: MyComp8128Component;
  let fixture: ComponentFixture<MyComp8128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
