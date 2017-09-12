import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3903Component } from './my-comp-3903.component';

describe('MyComp3903Component', () => {
  let component: MyComp3903Component;
  let fixture: ComponentFixture<MyComp3903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
