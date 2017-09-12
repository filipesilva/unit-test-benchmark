import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1522Component } from './my-comp-1522.component';

describe('MyComp1522Component', () => {
  let component: MyComp1522Component;
  let fixture: ComponentFixture<MyComp1522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
