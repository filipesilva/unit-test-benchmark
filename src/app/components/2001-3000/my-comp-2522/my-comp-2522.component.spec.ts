import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2522Component } from './my-comp-2522.component';

describe('MyComp2522Component', () => {
  let component: MyComp2522Component;
  let fixture: ComponentFixture<MyComp2522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
