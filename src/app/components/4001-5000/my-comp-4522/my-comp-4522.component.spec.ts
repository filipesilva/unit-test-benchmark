import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4522Component } from './my-comp-4522.component';

describe('MyComp4522Component', () => {
  let component: MyComp4522Component;
  let fixture: ComponentFixture<MyComp4522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
