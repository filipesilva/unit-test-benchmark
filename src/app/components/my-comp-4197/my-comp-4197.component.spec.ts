import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4197Component } from './my-comp-4197.component';

describe('MyComp4197Component', () => {
  let component: MyComp4197Component;
  let fixture: ComponentFixture<MyComp4197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
