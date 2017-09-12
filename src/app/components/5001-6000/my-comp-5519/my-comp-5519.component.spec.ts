import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5519Component } from './my-comp-5519.component';

describe('MyComp5519Component', () => {
  let component: MyComp5519Component;
  let fixture: ComponentFixture<MyComp5519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5519Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
