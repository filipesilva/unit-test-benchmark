import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8671Component } from './my-comp-8671.component';

describe('MyComp8671Component', () => {
  let component: MyComp8671Component;
  let fixture: ComponentFixture<MyComp8671Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8671Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
