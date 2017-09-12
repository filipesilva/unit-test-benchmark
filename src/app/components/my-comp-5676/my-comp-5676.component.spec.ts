import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5676Component } from './my-comp-5676.component';

describe('MyComp5676Component', () => {
  let component: MyComp5676Component;
  let fixture: ComponentFixture<MyComp5676Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5676Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
