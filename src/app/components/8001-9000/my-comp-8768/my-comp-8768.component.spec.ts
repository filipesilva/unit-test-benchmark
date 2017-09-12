import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8768Component } from './my-comp-8768.component';

describe('MyComp8768Component', () => {
  let component: MyComp8768Component;
  let fixture: ComponentFixture<MyComp8768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
