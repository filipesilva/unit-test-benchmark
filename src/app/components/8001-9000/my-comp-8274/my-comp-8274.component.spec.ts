import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8274Component } from './my-comp-8274.component';

describe('MyComp8274Component', () => {
  let component: MyComp8274Component;
  let fixture: ComponentFixture<MyComp8274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
