import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8587Component } from './my-comp-8587.component';

describe('MyComp8587Component', () => {
  let component: MyComp8587Component;
  let fixture: ComponentFixture<MyComp8587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
