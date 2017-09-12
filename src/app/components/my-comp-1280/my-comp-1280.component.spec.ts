import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1280Component } from './my-comp-1280.component';

describe('MyComp1280Component', () => {
  let component: MyComp1280Component;
  let fixture: ComponentFixture<MyComp1280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
