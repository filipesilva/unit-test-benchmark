import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8143Component } from './my-comp-8143.component';

describe('MyComp8143Component', () => {
  let component: MyComp8143Component;
  let fixture: ComponentFixture<MyComp8143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
