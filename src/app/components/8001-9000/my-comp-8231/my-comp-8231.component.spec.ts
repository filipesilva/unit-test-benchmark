import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8231Component } from './my-comp-8231.component';

describe('MyComp8231Component', () => {
  let component: MyComp8231Component;
  let fixture: ComponentFixture<MyComp8231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
