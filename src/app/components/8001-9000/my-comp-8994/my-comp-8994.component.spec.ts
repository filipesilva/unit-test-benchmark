import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8994Component } from './my-comp-8994.component';

describe('MyComp8994Component', () => {
  let component: MyComp8994Component;
  let fixture: ComponentFixture<MyComp8994Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8994Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
