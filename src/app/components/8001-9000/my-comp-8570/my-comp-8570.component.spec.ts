import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8570Component } from './my-comp-8570.component';

describe('MyComp8570Component', () => {
  let component: MyComp8570Component;
  let fixture: ComponentFixture<MyComp8570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8570Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
