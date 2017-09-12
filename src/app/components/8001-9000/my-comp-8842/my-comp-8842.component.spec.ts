import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8842Component } from './my-comp-8842.component';

describe('MyComp8842Component', () => {
  let component: MyComp8842Component;
  let fixture: ComponentFixture<MyComp8842Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8842Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
