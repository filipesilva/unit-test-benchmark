import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9133Component } from './my-comp-9133.component';

describe('MyComp9133Component', () => {
  let component: MyComp9133Component;
  let fixture: ComponentFixture<MyComp9133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
