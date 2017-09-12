import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8906Component } from './my-comp-8906.component';

describe('MyComp8906Component', () => {
  let component: MyComp8906Component;
  let fixture: ComponentFixture<MyComp8906Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8906Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
