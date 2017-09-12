import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8034Component } from './my-comp-8034.component';

describe('MyComp8034Component', () => {
  let component: MyComp8034Component;
  let fixture: ComponentFixture<MyComp8034Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8034Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8034Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
