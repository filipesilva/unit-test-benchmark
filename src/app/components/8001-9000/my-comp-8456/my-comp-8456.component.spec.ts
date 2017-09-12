import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8456Component } from './my-comp-8456.component';

describe('MyComp8456Component', () => {
  let component: MyComp8456Component;
  let fixture: ComponentFixture<MyComp8456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8456Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
