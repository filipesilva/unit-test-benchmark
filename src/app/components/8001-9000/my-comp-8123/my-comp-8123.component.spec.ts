import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8123Component } from './my-comp-8123.component';

describe('MyComp8123Component', () => {
  let component: MyComp8123Component;
  let fixture: ComponentFixture<MyComp8123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
