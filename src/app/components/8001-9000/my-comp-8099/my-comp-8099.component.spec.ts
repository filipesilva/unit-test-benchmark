import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8099Component } from './my-comp-8099.component';

describe('MyComp8099Component', () => {
  let component: MyComp8099Component;
  let fixture: ComponentFixture<MyComp8099Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8099Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
