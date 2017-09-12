import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8530Component } from './my-comp-8530.component';

describe('MyComp8530Component', () => {
  let component: MyComp8530Component;
  let fixture: ComponentFixture<MyComp8530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
