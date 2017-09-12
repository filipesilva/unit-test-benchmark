import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8642Component } from './my-comp-8642.component';

describe('MyComp8642Component', () => {
  let component: MyComp8642Component;
  let fixture: ComponentFixture<MyComp8642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
