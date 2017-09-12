import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8826Component } from './my-comp-8826.component';

describe('MyComp8826Component', () => {
  let component: MyComp8826Component;
  let fixture: ComponentFixture<MyComp8826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8826Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
