import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8472Component } from './my-comp-8472.component';

describe('MyComp8472Component', () => {
  let component: MyComp8472Component;
  let fixture: ComponentFixture<MyComp8472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
