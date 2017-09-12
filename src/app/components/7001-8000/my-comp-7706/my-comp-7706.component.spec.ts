import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7706Component } from './my-comp-7706.component';

describe('MyComp7706Component', () => {
  let component: MyComp7706Component;
  let fixture: ComponentFixture<MyComp7706Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7706Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
