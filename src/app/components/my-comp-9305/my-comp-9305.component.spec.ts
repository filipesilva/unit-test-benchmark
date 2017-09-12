import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9305Component } from './my-comp-9305.component';

describe('MyComp9305Component', () => {
  let component: MyComp9305Component;
  let fixture: ComponentFixture<MyComp9305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9305Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
