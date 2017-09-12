import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8088Component } from './my-comp-8088.component';

describe('MyComp8088Component', () => {
  let component: MyComp8088Component;
  let fixture: ComponentFixture<MyComp8088Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8088Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
