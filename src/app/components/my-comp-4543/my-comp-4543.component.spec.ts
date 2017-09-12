import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4543Component } from './my-comp-4543.component';

describe('MyComp4543Component', () => {
  let component: MyComp4543Component;
  let fixture: ComponentFixture<MyComp4543Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4543Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
