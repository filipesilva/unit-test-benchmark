import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8241Component } from './my-comp-8241.component';

describe('MyComp8241Component', () => {
  let component: MyComp8241Component;
  let fixture: ComponentFixture<MyComp8241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
