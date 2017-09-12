import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9519Component } from './my-comp-9519.component';

describe('MyComp9519Component', () => {
  let component: MyComp9519Component;
  let fixture: ComponentFixture<MyComp9519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9519Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
