import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8605Component } from './my-comp-8605.component';

describe('MyComp8605Component', () => {
  let component: MyComp8605Component;
  let fixture: ComponentFixture<MyComp8605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
