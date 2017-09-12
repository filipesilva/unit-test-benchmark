import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8003Component } from './my-comp-8003.component';

describe('MyComp8003Component', () => {
  let component: MyComp8003Component;
  let fixture: ComponentFixture<MyComp8003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
