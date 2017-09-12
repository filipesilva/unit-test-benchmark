import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5446Component } from './my-comp-5446.component';

describe('MyComp5446Component', () => {
  let component: MyComp5446Component;
  let fixture: ComponentFixture<MyComp5446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5446Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
