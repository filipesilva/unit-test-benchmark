import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4396Component } from './my-comp-4396.component';

describe('MyComp4396Component', () => {
  let component: MyComp4396Component;
  let fixture: ComponentFixture<MyComp4396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4396Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
