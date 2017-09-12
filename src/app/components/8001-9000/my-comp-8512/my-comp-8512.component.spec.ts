import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8512Component } from './my-comp-8512.component';

describe('MyComp8512Component', () => {
  let component: MyComp8512Component;
  let fixture: ComponentFixture<MyComp8512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
