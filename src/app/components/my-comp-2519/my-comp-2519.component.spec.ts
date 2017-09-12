import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2519Component } from './my-comp-2519.component';

describe('MyComp2519Component', () => {
  let component: MyComp2519Component;
  let fixture: ComponentFixture<MyComp2519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2519Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
