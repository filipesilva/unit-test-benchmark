import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4218Component } from './my-comp-4218.component';

describe('MyComp4218Component', () => {
  let component: MyComp4218Component;
  let fixture: ComponentFixture<MyComp4218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
