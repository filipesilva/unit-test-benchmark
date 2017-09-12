import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8691Component } from './my-comp-8691.component';

describe('MyComp8691Component', () => {
  let component: MyComp8691Component;
  let fixture: ComponentFixture<MyComp8691Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8691Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
