import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8696Component } from './my-comp-8696.component';

describe('MyComp8696Component', () => {
  let component: MyComp8696Component;
  let fixture: ComponentFixture<MyComp8696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8696Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
