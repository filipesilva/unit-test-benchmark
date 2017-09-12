import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8546Component } from './my-comp-8546.component';

describe('MyComp8546Component', () => {
  let component: MyComp8546Component;
  let fixture: ComponentFixture<MyComp8546Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8546Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
