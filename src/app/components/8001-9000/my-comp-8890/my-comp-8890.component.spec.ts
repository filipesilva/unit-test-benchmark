import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8890Component } from './my-comp-8890.component';

describe('MyComp8890Component', () => {
  let component: MyComp8890Component;
  let fixture: ComponentFixture<MyComp8890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
