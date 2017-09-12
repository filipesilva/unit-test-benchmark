import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8620Component } from './my-comp-8620.component';

describe('MyComp8620Component', () => {
  let component: MyComp8620Component;
  let fixture: ComponentFixture<MyComp8620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
