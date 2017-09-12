import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4285Component } from './my-comp-4285.component';

describe('MyComp4285Component', () => {
  let component: MyComp4285Component;
  let fixture: ComponentFixture<MyComp4285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4285Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
