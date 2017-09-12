import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8506Component } from './my-comp-8506.component';

describe('MyComp8506Component', () => {
  let component: MyComp8506Component;
  let fixture: ComponentFixture<MyComp8506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
