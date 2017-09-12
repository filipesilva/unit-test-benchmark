import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8950Component } from './my-comp-8950.component';

describe('MyComp8950Component', () => {
  let component: MyComp8950Component;
  let fixture: ComponentFixture<MyComp8950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8950Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
