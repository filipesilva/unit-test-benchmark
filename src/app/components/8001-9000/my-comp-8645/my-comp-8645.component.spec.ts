import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8645Component } from './my-comp-8645.component';

describe('MyComp8645Component', () => {
  let component: MyComp8645Component;
  let fixture: ComponentFixture<MyComp8645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
