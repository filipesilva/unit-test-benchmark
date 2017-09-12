import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8303Component } from './my-comp-8303.component';

describe('MyComp8303Component', () => {
  let component: MyComp8303Component;
  let fixture: ComponentFixture<MyComp8303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
