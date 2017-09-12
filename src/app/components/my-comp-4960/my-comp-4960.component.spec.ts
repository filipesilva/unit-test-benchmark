import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4960Component } from './my-comp-4960.component';

describe('MyComp4960Component', () => {
  let component: MyComp4960Component;
  let fixture: ComponentFixture<MyComp4960Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4960Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
