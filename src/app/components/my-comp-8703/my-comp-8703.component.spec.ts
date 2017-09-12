import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8703Component } from './my-comp-8703.component';

describe('MyComp8703Component', () => {
  let component: MyComp8703Component;
  let fixture: ComponentFixture<MyComp8703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
