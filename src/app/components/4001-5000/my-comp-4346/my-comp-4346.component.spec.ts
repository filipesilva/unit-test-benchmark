import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4346Component } from './my-comp-4346.component';

describe('MyComp4346Component', () => {
  let component: MyComp4346Component;
  let fixture: ComponentFixture<MyComp4346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
