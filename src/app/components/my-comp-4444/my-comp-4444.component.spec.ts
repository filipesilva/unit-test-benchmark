import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4444Component } from './my-comp-4444.component';

describe('MyComp4444Component', () => {
  let component: MyComp4444Component;
  let fixture: ComponentFixture<MyComp4444Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4444Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
