import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8638Component } from './my-comp-8638.component';

describe('MyComp8638Component', () => {
  let component: MyComp8638Component;
  let fixture: ComponentFixture<MyComp8638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8638Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
