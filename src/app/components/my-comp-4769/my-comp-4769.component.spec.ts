import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4769Component } from './my-comp-4769.component';

describe('MyComp4769Component', () => {
  let component: MyComp4769Component;
  let fixture: ComponentFixture<MyComp4769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
