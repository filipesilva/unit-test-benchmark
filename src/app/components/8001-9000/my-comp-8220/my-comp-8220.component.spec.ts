import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8220Component } from './my-comp-8220.component';

describe('MyComp8220Component', () => {
  let component: MyComp8220Component;
  let fixture: ComponentFixture<MyComp8220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
