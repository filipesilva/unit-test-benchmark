import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8845Component } from './my-comp-8845.component';

describe('MyComp8845Component', () => {
  let component: MyComp8845Component;
  let fixture: ComponentFixture<MyComp8845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
