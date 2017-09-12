import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4415Component } from './my-comp-4415.component';

describe('MyComp4415Component', () => {
  let component: MyComp4415Component;
  let fixture: ComponentFixture<MyComp4415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
