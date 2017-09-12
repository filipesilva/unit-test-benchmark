import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8971Component } from './my-comp-8971.component';

describe('MyComp8971Component', () => {
  let component: MyComp8971Component;
  let fixture: ComponentFixture<MyComp8971Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8971Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
