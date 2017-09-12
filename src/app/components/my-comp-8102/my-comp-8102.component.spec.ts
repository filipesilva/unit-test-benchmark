import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8102Component } from './my-comp-8102.component';

describe('MyComp8102Component', () => {
  let component: MyComp8102Component;
  let fixture: ComponentFixture<MyComp8102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
