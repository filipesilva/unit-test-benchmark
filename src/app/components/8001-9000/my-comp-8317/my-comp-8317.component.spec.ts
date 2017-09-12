import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8317Component } from './my-comp-8317.component';

describe('MyComp8317Component', () => {
  let component: MyComp8317Component;
  let fixture: ComponentFixture<MyComp8317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
