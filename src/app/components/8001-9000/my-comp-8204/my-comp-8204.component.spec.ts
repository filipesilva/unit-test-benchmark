import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8204Component } from './my-comp-8204.component';

describe('MyComp8204Component', () => {
  let component: MyComp8204Component;
  let fixture: ComponentFixture<MyComp8204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
