import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4710Component } from './my-comp-4710.component';

describe('MyComp4710Component', () => {
  let component: MyComp4710Component;
  let fixture: ComponentFixture<MyComp4710Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4710Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
