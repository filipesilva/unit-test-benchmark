import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8319Component } from './my-comp-8319.component';

describe('MyComp8319Component', () => {
  let component: MyComp8319Component;
  let fixture: ComponentFixture<MyComp8319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
