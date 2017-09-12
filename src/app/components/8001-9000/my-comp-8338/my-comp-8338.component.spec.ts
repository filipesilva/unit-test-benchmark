import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8338Component } from './my-comp-8338.component';

describe('MyComp8338Component', () => {
  let component: MyComp8338Component;
  let fixture: ComponentFixture<MyComp8338Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8338Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
