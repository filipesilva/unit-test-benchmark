import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8742Component } from './my-comp-8742.component';

describe('MyComp8742Component', () => {
  let component: MyComp8742Component;
  let fixture: ComponentFixture<MyComp8742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8742Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
