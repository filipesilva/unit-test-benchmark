import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8532Component } from './my-comp-8532.component';

describe('MyComp8532Component', () => {
  let component: MyComp8532Component;
  let fixture: ComponentFixture<MyComp8532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
