import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8655Component } from './my-comp-8655.component';

describe('MyComp8655Component', () => {
  let component: MyComp8655Component;
  let fixture: ComponentFixture<MyComp8655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
