import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8777Component } from './my-comp-8777.component';

describe('MyComp8777Component', () => {
  let component: MyComp8777Component;
  let fixture: ComponentFixture<MyComp8777Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8777Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
