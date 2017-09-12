import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1947Component } from './my-comp-1947.component';

describe('MyComp1947Component', () => {
  let component: MyComp1947Component;
  let fixture: ComponentFixture<MyComp1947Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1947Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
