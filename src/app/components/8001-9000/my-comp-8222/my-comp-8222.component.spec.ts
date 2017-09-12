import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8222Component } from './my-comp-8222.component';

describe('MyComp8222Component', () => {
  let component: MyComp8222Component;
  let fixture: ComponentFixture<MyComp8222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
