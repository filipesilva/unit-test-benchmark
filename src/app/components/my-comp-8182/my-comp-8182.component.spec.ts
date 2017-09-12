import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8182Component } from './my-comp-8182.component';

describe('MyComp8182Component', () => {
  let component: MyComp8182Component;
  let fixture: ComponentFixture<MyComp8182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
