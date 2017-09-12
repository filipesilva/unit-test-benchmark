import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4717Component } from './my-comp-4717.component';

describe('MyComp4717Component', () => {
  let component: MyComp4717Component;
  let fixture: ComponentFixture<MyComp4717Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4717Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
