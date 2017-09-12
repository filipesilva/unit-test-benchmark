import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8516Component } from './my-comp-8516.component';

describe('MyComp8516Component', () => {
  let component: MyComp8516Component;
  let fixture: ComponentFixture<MyComp8516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
