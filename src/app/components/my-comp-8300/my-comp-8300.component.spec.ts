import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8300Component } from './my-comp-8300.component';

describe('MyComp8300Component', () => {
  let component: MyComp8300Component;
  let fixture: ComponentFixture<MyComp8300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
