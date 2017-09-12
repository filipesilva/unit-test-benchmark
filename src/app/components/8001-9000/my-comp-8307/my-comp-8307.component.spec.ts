import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8307Component } from './my-comp-8307.component';

describe('MyComp8307Component', () => {
  let component: MyComp8307Component;
  let fixture: ComponentFixture<MyComp8307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
