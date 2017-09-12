import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4180Component } from './my-comp-4180.component';

describe('MyComp4180Component', () => {
  let component: MyComp4180Component;
  let fixture: ComponentFixture<MyComp4180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
