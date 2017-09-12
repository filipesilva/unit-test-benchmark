import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3835Component } from './my-comp-3835.component';

describe('MyComp3835Component', () => {
  let component: MyComp3835Component;
  let fixture: ComponentFixture<MyComp3835Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3835Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
