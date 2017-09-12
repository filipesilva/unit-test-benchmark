import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8196Component } from './my-comp-8196.component';

describe('MyComp8196Component', () => {
  let component: MyComp8196Component;
  let fixture: ComponentFixture<MyComp8196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
