import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7522Component } from './my-comp-7522.component';

describe('MyComp7522Component', () => {
  let component: MyComp7522Component;
  let fixture: ComponentFixture<MyComp7522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
