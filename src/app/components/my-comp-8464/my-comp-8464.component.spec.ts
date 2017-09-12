import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8464Component } from './my-comp-8464.component';

describe('MyComp8464Component', () => {
  let component: MyComp8464Component;
  let fixture: ComponentFixture<MyComp8464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8464Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
