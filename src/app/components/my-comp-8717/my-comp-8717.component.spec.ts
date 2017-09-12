import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8717Component } from './my-comp-8717.component';

describe('MyComp8717Component', () => {
  let component: MyComp8717Component;
  let fixture: ComponentFixture<MyComp8717Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8717Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
