import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8575Component } from './my-comp-8575.component';

describe('MyComp8575Component', () => {
  let component: MyComp8575Component;
  let fixture: ComponentFixture<MyComp8575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
