import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8763Component } from './my-comp-8763.component';

describe('MyComp8763Component', () => {
  let component: MyComp8763Component;
  let fixture: ComponentFixture<MyComp8763Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8763Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
