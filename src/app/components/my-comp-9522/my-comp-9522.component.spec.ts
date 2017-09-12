import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9522Component } from './my-comp-9522.component';

describe('MyComp9522Component', () => {
  let component: MyComp9522Component;
  let fixture: ComponentFixture<MyComp9522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
