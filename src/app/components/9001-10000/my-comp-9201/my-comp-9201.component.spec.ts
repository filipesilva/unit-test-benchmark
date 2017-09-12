import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9201Component } from './my-comp-9201.component';

describe('MyComp9201Component', () => {
  let component: MyComp9201Component;
  let fixture: ComponentFixture<MyComp9201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
