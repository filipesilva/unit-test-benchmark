import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8779Component } from './my-comp-8779.component';

describe('MyComp8779Component', () => {
  let component: MyComp8779Component;
  let fixture: ComponentFixture<MyComp8779Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8779Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
