import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8539Component } from './my-comp-8539.component';

describe('MyComp8539Component', () => {
  let component: MyComp8539Component;
  let fixture: ComponentFixture<MyComp8539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
