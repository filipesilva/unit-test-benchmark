import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8346Component } from './my-comp-8346.component';

describe('MyComp8346Component', () => {
  let component: MyComp8346Component;
  let fixture: ComponentFixture<MyComp8346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
