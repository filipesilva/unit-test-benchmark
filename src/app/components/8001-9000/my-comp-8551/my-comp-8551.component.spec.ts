import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8551Component } from './my-comp-8551.component';

describe('MyComp8551Component', () => {
  let component: MyComp8551Component;
  let fixture: ComponentFixture<MyComp8551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
