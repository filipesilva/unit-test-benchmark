import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8617Component } from './my-comp-8617.component';

describe('MyComp8617Component', () => {
  let component: MyComp8617Component;
  let fixture: ComponentFixture<MyComp8617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
