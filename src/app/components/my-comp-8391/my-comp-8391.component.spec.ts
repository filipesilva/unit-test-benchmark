import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8391Component } from './my-comp-8391.component';

describe('MyComp8391Component', () => {
  let component: MyComp8391Component;
  let fixture: ComponentFixture<MyComp8391Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8391Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
