import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8958Component } from './my-comp-8958.component';

describe('MyComp8958Component', () => {
  let component: MyComp8958Component;
  let fixture: ComponentFixture<MyComp8958Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8958Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
