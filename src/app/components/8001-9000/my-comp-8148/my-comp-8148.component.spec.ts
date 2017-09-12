import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8148Component } from './my-comp-8148.component';

describe('MyComp8148Component', () => {
  let component: MyComp8148Component;
  let fixture: ComponentFixture<MyComp8148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
