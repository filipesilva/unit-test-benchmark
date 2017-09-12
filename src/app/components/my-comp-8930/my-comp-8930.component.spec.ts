import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8930Component } from './my-comp-8930.component';

describe('MyComp8930Component', () => {
  let component: MyComp8930Component;
  let fixture: ComponentFixture<MyComp8930Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8930Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
