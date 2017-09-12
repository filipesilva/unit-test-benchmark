import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3519Component } from './my-comp-3519.component';

describe('MyComp3519Component', () => {
  let component: MyComp3519Component;
  let fixture: ComponentFixture<MyComp3519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3519Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
