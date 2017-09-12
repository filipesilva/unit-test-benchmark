import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8026Component } from './my-comp-8026.component';

describe('MyComp8026Component', () => {
  let component: MyComp8026Component;
  let fixture: ComponentFixture<MyComp8026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
