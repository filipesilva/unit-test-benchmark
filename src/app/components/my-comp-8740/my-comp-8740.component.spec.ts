import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8740Component } from './my-comp-8740.component';

describe('MyComp8740Component', () => {
  let component: MyComp8740Component;
  let fixture: ComponentFixture<MyComp8740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8740Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
