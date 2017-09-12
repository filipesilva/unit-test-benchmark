import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8839Component } from './my-comp-8839.component';

describe('MyComp8839Component', () => {
  let component: MyComp8839Component;
  let fixture: ComponentFixture<MyComp8839Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8839Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
