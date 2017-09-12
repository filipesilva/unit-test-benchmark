import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4567Component } from './my-comp-4567.component';

describe('MyComp4567Component', () => {
  let component: MyComp4567Component;
  let fixture: ComponentFixture<MyComp4567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4567Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
