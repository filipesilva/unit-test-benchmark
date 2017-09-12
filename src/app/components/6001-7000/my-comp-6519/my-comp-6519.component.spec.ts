import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6519Component } from './my-comp-6519.component';

describe('MyComp6519Component', () => {
  let component: MyComp6519Component;
  let fixture: ComponentFixture<MyComp6519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6519Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
