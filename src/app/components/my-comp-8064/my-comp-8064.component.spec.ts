import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8064Component } from './my-comp-8064.component';

describe('MyComp8064Component', () => {
  let component: MyComp8064Component;
  let fixture: ComponentFixture<MyComp8064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
