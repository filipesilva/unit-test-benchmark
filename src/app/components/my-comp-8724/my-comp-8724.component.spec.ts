import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8724Component } from './my-comp-8724.component';

describe('MyComp8724Component', () => {
  let component: MyComp8724Component;
  let fixture: ComponentFixture<MyComp8724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
