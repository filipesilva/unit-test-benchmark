import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8523Component } from './my-comp-8523.component';

describe('MyComp8523Component', () => {
  let component: MyComp8523Component;
  let fixture: ComponentFixture<MyComp8523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
