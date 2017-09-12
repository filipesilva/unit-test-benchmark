import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp646Component } from './my-comp-646.component';

describe('MyComp646Component', () => {
  let component: MyComp646Component;
  let fixture: ComponentFixture<MyComp646Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp646Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
