import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8753Component } from './my-comp-8753.component';

describe('MyComp8753Component', () => {
  let component: MyComp8753Component;
  let fixture: ComponentFixture<MyComp8753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
