import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4092Component } from './my-comp-4092.component';

describe('MyComp4092Component', () => {
  let component: MyComp4092Component;
  let fixture: ComponentFixture<MyComp4092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
