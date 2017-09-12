import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8119Component } from './my-comp-8119.component';

describe('MyComp8119Component', () => {
  let component: MyComp8119Component;
  let fixture: ComponentFixture<MyComp8119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
