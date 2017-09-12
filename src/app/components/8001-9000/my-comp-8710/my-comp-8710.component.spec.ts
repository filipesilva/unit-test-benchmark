import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8710Component } from './my-comp-8710.component';

describe('MyComp8710Component', () => {
  let component: MyComp8710Component;
  let fixture: ComponentFixture<MyComp8710Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8710Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
