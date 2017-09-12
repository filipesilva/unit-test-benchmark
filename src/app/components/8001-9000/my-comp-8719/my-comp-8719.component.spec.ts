import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8719Component } from './my-comp-8719.component';

describe('MyComp8719Component', () => {
  let component: MyComp8719Component;
  let fixture: ComponentFixture<MyComp8719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
