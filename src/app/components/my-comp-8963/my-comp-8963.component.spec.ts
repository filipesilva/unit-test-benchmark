import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8963Component } from './my-comp-8963.component';

describe('MyComp8963Component', () => {
  let component: MyComp8963Component;
  let fixture: ComponentFixture<MyComp8963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8963Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
