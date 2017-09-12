import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8508Component } from './my-comp-8508.component';

describe('MyComp8508Component', () => {
  let component: MyComp8508Component;
  let fixture: ComponentFixture<MyComp8508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
