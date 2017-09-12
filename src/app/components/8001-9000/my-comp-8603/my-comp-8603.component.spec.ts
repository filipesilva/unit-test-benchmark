import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8603Component } from './my-comp-8603.component';

describe('MyComp8603Component', () => {
  let component: MyComp8603Component;
  let fixture: ComponentFixture<MyComp8603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
