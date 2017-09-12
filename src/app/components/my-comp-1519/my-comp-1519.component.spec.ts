import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1519Component } from './my-comp-1519.component';

describe('MyComp1519Component', () => {
  let component: MyComp1519Component;
  let fixture: ComponentFixture<MyComp1519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1519Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
