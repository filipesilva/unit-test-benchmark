import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6522Component } from './my-comp-6522.component';

describe('MyComp6522Component', () => {
  let component: MyComp6522Component;
  let fixture: ComponentFixture<MyComp6522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
