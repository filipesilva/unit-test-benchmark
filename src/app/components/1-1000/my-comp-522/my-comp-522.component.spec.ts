import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp522Component } from './my-comp-522.component';

describe('MyComp522Component', () => {
  let component: MyComp522Component;
  let fixture: ComponentFixture<MyComp522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
