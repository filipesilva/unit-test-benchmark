import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8077Component } from './my-comp-8077.component';

describe('MyComp8077Component', () => {
  let component: MyComp8077Component;
  let fixture: ComponentFixture<MyComp8077Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8077Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
