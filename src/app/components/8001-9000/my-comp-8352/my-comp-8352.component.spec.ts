import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8352Component } from './my-comp-8352.component';

describe('MyComp8352Component', () => {
  let component: MyComp8352Component;
  let fixture: ComponentFixture<MyComp8352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
