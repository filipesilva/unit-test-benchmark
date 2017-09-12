import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9843Component } from './my-comp-9843.component';

describe('MyComp9843Component', () => {
  let component: MyComp9843Component;
  let fixture: ComponentFixture<MyComp9843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
