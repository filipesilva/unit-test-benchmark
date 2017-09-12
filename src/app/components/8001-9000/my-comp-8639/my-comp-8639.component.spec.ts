import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8639Component } from './my-comp-8639.component';

describe('MyComp8639Component', () => {
  let component: MyComp8639Component;
  let fixture: ComponentFixture<MyComp8639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
