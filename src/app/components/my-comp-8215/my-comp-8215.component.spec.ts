import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8215Component } from './my-comp-8215.component';

describe('MyComp8215Component', () => {
  let component: MyComp8215Component;
  let fixture: ComponentFixture<MyComp8215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
