import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7519Component } from './my-comp-7519.component';

describe('MyComp7519Component', () => {
  let component: MyComp7519Component;
  let fixture: ComponentFixture<MyComp7519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7519Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
