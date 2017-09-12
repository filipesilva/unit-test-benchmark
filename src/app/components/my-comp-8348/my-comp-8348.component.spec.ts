import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8348Component } from './my-comp-8348.component';

describe('MyComp8348Component', () => {
  let component: MyComp8348Component;
  let fixture: ComponentFixture<MyComp8348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
