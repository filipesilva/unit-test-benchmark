import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4519Component } from './my-comp-4519.component';

describe('MyComp4519Component', () => {
  let component: MyComp4519Component;
  let fixture: ComponentFixture<MyComp4519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4519Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
