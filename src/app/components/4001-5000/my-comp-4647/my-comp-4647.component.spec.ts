import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4647Component } from './my-comp-4647.component';

describe('MyComp4647Component', () => {
  let component: MyComp4647Component;
  let fixture: ComponentFixture<MyComp4647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
