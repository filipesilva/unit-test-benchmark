import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8878Component } from './my-comp-8878.component';

describe('MyComp8878Component', () => {
  let component: MyComp8878Component;
  let fixture: ComponentFixture<MyComp8878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
