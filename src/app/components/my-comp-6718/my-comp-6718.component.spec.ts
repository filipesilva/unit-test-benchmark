import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6718Component } from './my-comp-6718.component';

describe('MyComp6718Component', () => {
  let component: MyComp6718Component;
  let fixture: ComponentFixture<MyComp6718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
