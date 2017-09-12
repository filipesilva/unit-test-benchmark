import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4921Component } from './my-comp-4921.component';

describe('MyComp4921Component', () => {
  let component: MyComp4921Component;
  let fixture: ComponentFixture<MyComp4921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4921Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
