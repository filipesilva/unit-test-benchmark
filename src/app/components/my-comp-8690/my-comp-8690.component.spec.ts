import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8690Component } from './my-comp-8690.component';

describe('MyComp8690Component', () => {
  let component: MyComp8690Component;
  let fixture: ComponentFixture<MyComp8690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8690Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
