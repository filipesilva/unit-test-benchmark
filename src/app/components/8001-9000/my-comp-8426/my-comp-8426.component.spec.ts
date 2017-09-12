import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8426Component } from './my-comp-8426.component';

describe('MyComp8426Component', () => {
  let component: MyComp8426Component;
  let fixture: ComponentFixture<MyComp8426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
