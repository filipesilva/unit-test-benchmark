import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8389Component } from './my-comp-8389.component';

describe('MyComp8389Component', () => {
  let component: MyComp8389Component;
  let fixture: ComponentFixture<MyComp8389Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8389Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
