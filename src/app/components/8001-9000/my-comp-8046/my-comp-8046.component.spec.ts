import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8046Component } from './my-comp-8046.component';

describe('MyComp8046Component', () => {
  let component: MyComp8046Component;
  let fixture: ComponentFixture<MyComp8046Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8046Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
