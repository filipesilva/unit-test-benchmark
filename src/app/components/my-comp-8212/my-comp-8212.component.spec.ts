import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8212Component } from './my-comp-8212.component';

describe('MyComp8212Component', () => {
  let component: MyComp8212Component;
  let fixture: ComponentFixture<MyComp8212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
