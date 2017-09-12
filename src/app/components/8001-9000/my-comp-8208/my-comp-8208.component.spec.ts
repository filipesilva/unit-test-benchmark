import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8208Component } from './my-comp-8208.component';

describe('MyComp8208Component', () => {
  let component: MyComp8208Component;
  let fixture: ComponentFixture<MyComp8208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
