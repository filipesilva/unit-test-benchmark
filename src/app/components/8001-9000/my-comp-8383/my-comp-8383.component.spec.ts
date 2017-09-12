import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8383Component } from './my-comp-8383.component';

describe('MyComp8383Component', () => {
  let component: MyComp8383Component;
  let fixture: ComponentFixture<MyComp8383Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8383Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
