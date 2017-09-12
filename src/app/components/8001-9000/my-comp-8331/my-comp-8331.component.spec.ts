import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8331Component } from './my-comp-8331.component';

describe('MyComp8331Component', () => {
  let component: MyComp8331Component;
  let fixture: ComponentFixture<MyComp8331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
