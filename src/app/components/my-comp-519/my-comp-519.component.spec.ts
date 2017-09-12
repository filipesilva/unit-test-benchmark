import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp519Component } from './my-comp-519.component';

describe('MyComp519Component', () => {
  let component: MyComp519Component;
  let fixture: ComponentFixture<MyComp519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp519Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
