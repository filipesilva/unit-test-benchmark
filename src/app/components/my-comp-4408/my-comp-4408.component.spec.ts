import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4408Component } from './my-comp-4408.component';

describe('MyComp4408Component', () => {
  let component: MyComp4408Component;
  let fixture: ComponentFixture<MyComp4408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
