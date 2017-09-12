import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8384Component } from './my-comp-8384.component';

describe('MyComp8384Component', () => {
  let component: MyComp8384Component;
  let fixture: ComponentFixture<MyComp8384Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8384Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
