import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8613Component } from './my-comp-8613.component';

describe('MyComp8613Component', () => {
  let component: MyComp8613Component;
  let fixture: ComponentFixture<MyComp8613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
