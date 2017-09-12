import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8899Component } from './my-comp-8899.component';

describe('MyComp8899Component', () => {
  let component: MyComp8899Component;
  let fixture: ComponentFixture<MyComp8899Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8899Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
