import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8888Component } from './my-comp-8888.component';

describe('MyComp8888Component', () => {
  let component: MyComp8888Component;
  let fixture: ComponentFixture<MyComp8888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8888Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
