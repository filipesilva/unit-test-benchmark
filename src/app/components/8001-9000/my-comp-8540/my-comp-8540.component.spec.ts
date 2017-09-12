import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8540Component } from './my-comp-8540.component';

describe('MyComp8540Component', () => {
  let component: MyComp8540Component;
  let fixture: ComponentFixture<MyComp8540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8540Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
