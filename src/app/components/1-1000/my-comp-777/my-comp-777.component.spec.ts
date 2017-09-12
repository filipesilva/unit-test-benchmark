import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp777Component } from './my-comp-777.component';

describe('MyComp777Component', () => {
  let component: MyComp777Component;
  let fixture: ComponentFixture<MyComp777Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp777Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
