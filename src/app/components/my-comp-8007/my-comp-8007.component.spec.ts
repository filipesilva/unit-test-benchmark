import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8007Component } from './my-comp-8007.component';

describe('MyComp8007Component', () => {
  let component: MyComp8007Component;
  let fixture: ComponentFixture<MyComp8007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
