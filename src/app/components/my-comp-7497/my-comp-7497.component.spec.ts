import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7497Component } from './my-comp-7497.component';

describe('MyComp7497Component', () => {
  let component: MyComp7497Component;
  let fixture: ComponentFixture<MyComp7497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
