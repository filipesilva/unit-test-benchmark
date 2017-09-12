import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5137Component } from './my-comp-5137.component';

describe('MyComp5137Component', () => {
  let component: MyComp5137Component;
  let fixture: ComponentFixture<MyComp5137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
