import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8946Component } from './my-comp-8946.component';

describe('MyComp8946Component', () => {
  let component: MyComp8946Component;
  let fixture: ComponentFixture<MyComp8946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8946Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
