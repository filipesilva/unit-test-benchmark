import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8226Component } from './my-comp-8226.component';

describe('MyComp8226Component', () => {
  let component: MyComp8226Component;
  let fixture: ComponentFixture<MyComp8226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
