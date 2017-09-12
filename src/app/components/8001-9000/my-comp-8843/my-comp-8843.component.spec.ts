import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8843Component } from './my-comp-8843.component';

describe('MyComp8843Component', () => {
  let component: MyComp8843Component;
  let fixture: ComponentFixture<MyComp8843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
