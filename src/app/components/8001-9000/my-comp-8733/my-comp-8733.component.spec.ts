import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8733Component } from './my-comp-8733.component';

describe('MyComp8733Component', () => {
  let component: MyComp8733Component;
  let fixture: ComponentFixture<MyComp8733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8733Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
