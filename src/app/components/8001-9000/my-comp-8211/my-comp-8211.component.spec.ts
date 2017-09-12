import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8211Component } from './my-comp-8211.component';

describe('MyComp8211Component', () => {
  let component: MyComp8211Component;
  let fixture: ComponentFixture<MyComp8211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
