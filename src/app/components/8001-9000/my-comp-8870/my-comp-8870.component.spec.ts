import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8870Component } from './my-comp-8870.component';

describe('MyComp8870Component', () => {
  let component: MyComp8870Component;
  let fixture: ComponentFixture<MyComp8870Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8870Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
