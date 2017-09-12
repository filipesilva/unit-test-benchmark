import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8695Component } from './my-comp-8695.component';

describe('MyComp8695Component', () => {
  let component: MyComp8695Component;
  let fixture: ComponentFixture<MyComp8695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8695Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
