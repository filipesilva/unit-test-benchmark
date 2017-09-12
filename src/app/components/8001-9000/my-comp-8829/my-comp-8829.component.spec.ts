import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8829Component } from './my-comp-8829.component';

describe('MyComp8829Component', () => {
  let component: MyComp8829Component;
  let fixture: ComponentFixture<MyComp8829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8829Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
